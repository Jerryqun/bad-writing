"""
股票 Agent 工具集
基于 akshare 获取 A 股数据，提供给 Agent 调用
"""
import akshare as ak
import pandas as pd
from langchain_core.tools import tool
from datetime import datetime, timedelta


@tool
def get_stock_realtime_price(symbol: str) -> str:
    """查询 A 股股票的实时行情数据。

    Args:
        symbol: 股票代码，如 "600519"（贵州茅台）、"000001"（平安银行）
    """
    try:
        df = ak.stock_zh_a_spot_em()
        stock_data = df[df["代码"] == symbol]

        if stock_data.empty:
            return f"未找到股票代码 {symbol} 的数据，请检查代码是否正确。A 股代码为 6 位数字。"

        row = stock_data.iloc[0]
        result = (
            f"📊 {row['名称']}（{row['代码']}）实时行情\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"最新价: {row['最新价']} 元\n"
            f"涨跌幅: {row['涨跌幅']}%\n"
            f"涨跌额: {row['涨跌额']} 元\n"
            f"今开: {row['今开']} | 昨收: {row['昨收']}\n"
            f"最高: {row['最高']} | 最低: {row['最低']}\n"
            f"成交量: {row['成交量']} 手\n"
            f"成交额: {row['成交额']} 元\n"
            f"换手率: {row['换手率']}%\n"
            f"市盈率: {row.get('市盈率-动态', 'N/A')}\n"
            f"市净率: {row.get('市净率', 'N/A')}"
        )
        return result
    except Exception as error:
        return f"查询实时行情失败: {str(error)}"


@tool
def get_stock_history(symbol: str, days: int = 30) -> str:
    """查询 A 股股票的历史行情数据。

    Args:
        symbol: 股票代码，如 "600519"
        days: 查询最近多少天的数据，默认30天，最大365天
    """
    try:
        days = min(days, 365)
        end_date = datetime.now().strftime("%Y%m%d")
        start_date = (datetime.now() - timedelta(days=days)).strftime("%Y%m%d")

        df = ak.stock_zh_a_hist(
            symbol=symbol,
            period="daily",
            start_date=start_date,
            end_date=end_date,
            adjust="qfq"
        )

        if df.empty:
            return f"未找到股票 {symbol} 近 {days} 天的历史数据。"

        stock_name = get_stock_name(symbol)
        latest = df.iloc[-1]
        earliest = df.iloc[0]
        price_change = float(latest["收盘"]) - float(earliest["收盘"])
        price_change_pct = (price_change / float(earliest["收盘"])) * 100

        result = (
            f"📈 {stock_name}（{symbol}）近 {days} 天历史行情\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"期间涨跌: {price_change:.2f} 元 ({price_change_pct:+.2f}%)\n"
            f"起始价: {earliest['收盘']} → 最新价: {latest['收盘']}\n"
            f"期间最高: {df['最高'].max()} 元\n"
            f"期间最低: {df['最低'].min()} 元\n"
            f"日均成交量: {df['成交量'].mean():.0f} 手\n"
            f"\n最近 5 个交易日：\n"
        )

        for _, row in df.tail(5).iterrows():
            result += f"  {row['日期']} | 收盘: {row['收盘']} | 涨跌幅: {row['涨跌幅']}% | 成交量: {row['成交量']}手\n"

        return result
    except Exception as error:
        return f"查询历史行情失败: {str(error)}"


@tool
def get_stock_technical_analysis(symbol: str) -> str:
    """对 A 股股票进行技术面分析，包含均线、MACD、RSI 等指标。

    Args:
        symbol: 股票代码，如 "600519"
    """
    try:
        end_date = datetime.now().strftime("%Y%m%d")
        start_date = (datetime.now() - timedelta(days=120)).strftime("%Y%m%d")

        df = ak.stock_zh_a_hist(
            symbol=symbol,
            period="daily",
            start_date=start_date,
            end_date=end_date,
            adjust="qfq"
        )

        if df.empty or len(df) < 20:
            return f"股票 {symbol} 数据不足，无法进行技术分析。"

        df["收盘"] = df["收盘"].astype(float)
        stock_name = get_stock_name(symbol)

        moving_average_5 = df["收盘"].rolling(window=5).mean().iloc[-1]
        moving_average_10 = df["收盘"].rolling(window=10).mean().iloc[-1]
        moving_average_20 = df["收盘"].rolling(window=20).mean().iloc[-1]
        moving_average_60 = df["收盘"].rolling(window=60).mean().iloc[-1] if len(df) >= 60 else None

        latest_price = df["收盘"].iloc[-1]

        ema12 = df["收盘"].ewm(span=12, adjust=False).mean()
        ema26 = df["收盘"].ewm(span=26, adjust=False).mean()
        macd_dif = ema12 - ema26
        macd_dea = macd_dif.ewm(span=9, adjust=False).mean()
        macd_histogram = 2 * (macd_dif - macd_dea)

        delta = df["收盘"].diff()
        gain = delta.where(delta > 0, 0).rolling(window=14).mean()
        loss = (-delta.where(delta < 0, 0)).rolling(window=14).mean()
        relative_strength = gain / loss
        rsi_14 = 100 - (100 / (1 + relative_strength))

        trend_signals = []
        if latest_price > moving_average_5 > moving_average_10 > moving_average_20:
            trend_signals.append("多头排列（看涨）")
        elif latest_price < moving_average_5 < moving_average_10 < moving_average_20:
            trend_signals.append("空头排列（看跌）")
        else:
            trend_signals.append("震荡整理")

        if macd_dif.iloc[-1] > macd_dea.iloc[-1] and macd_dif.iloc[-2] <= macd_dea.iloc[-2]:
            trend_signals.append("MACD 金叉（买入信号）")
        elif macd_dif.iloc[-1] < macd_dea.iloc[-1] and macd_dif.iloc[-2] >= macd_dea.iloc[-2]:
            trend_signals.append("MACD 死叉（卖出信号）")

        current_rsi = rsi_14.iloc[-1]
        if current_rsi > 70:
            trend_signals.append(f"RSI={current_rsi:.1f}（超买区域，注意风险）")
        elif current_rsi < 30:
            trend_signals.append(f"RSI={current_rsi:.1f}（超卖区域，可能反弹）")
        else:
            trend_signals.append(f"RSI={current_rsi:.1f}（正常区间）")

        result = (
            f"📉 {stock_name}（{symbol}）技术面分析\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"最新价: {latest_price} 元\n\n"
            f"【均线系统】\n"
            f"  MA5:  {moving_average_5:.2f}\n"
            f"  MA10: {moving_average_10:.2f}\n"
            f"  MA20: {moving_average_20:.2f}\n"
        )

        if moving_average_60:
            result += f"  MA60: {moving_average_60:.2f}\n"

        result += (
            f"\n【MACD】\n"
            f"  DIF:  {macd_dif.iloc[-1]:.4f}\n"
            f"  DEA:  {macd_dea.iloc[-1]:.4f}\n"
            f"  柱状: {macd_histogram.iloc[-1]:.4f}\n"
            f"\n【RSI(14)】: {current_rsi:.2f}\n"
            f"\n【综合信号】\n"
        )

        for signal in trend_signals:
            result += f"  ⚡ {signal}\n"

        return result
    except Exception as error:
        return f"技术分析失败: {str(error)}"


@tool
def get_stock_news(symbol: str) -> str:
    """查询 A 股股票的最新相关新闻和公告。

    Args:
        symbol: 股票代码，如 "600519"
    """
    try:
        stock_name = get_stock_name(symbol)

        try:
            df = ak.stock_news_em(symbol=symbol)
            if df.empty:
                return f"暂无 {stock_name}（{symbol}）的相关新闻。"

            result = f"📰 {stock_name}（{symbol}）最新新闻\n━━━━━━━━━━━━━━━━━━━━━━━━\n"
            for _, row in df.head(8).iterrows():
                title = row.get("新闻标题", row.get("title", ""))
                publish_time = row.get("发布时间", row.get("publish_time", ""))
                source = row.get("新闻来源", row.get("source", ""))
                result += f"\n📌 {title}\n   来源: {source} | 时间: {publish_time}\n"

            return result
        except Exception:
            df = ak.stock_individual_info_em(symbol=symbol)
            result = f"📋 {stock_name}（{symbol}）基本信息\n━━━━━━━━━━━━━━━━━━━━━━━━\n"
            for _, row in df.iterrows():
                result += f"  {row['item']}: {row['value']}\n"
            return result + "\n（新闻接口暂时不可用，已返回公司基本信息）"

    except Exception as error:
        return f"查询新闻失败: {str(error)}"


@tool
def search_stock_by_name(keyword: str) -> str:
    """根据股票名称关键词搜索股票代码。当用户说股票名称而不是代码时使用。

    Args:
        keyword: 股票名称关键词，如 "茅台"、"平安"、"比亚迪"
    """
    try:
        df = ak.stock_zh_a_spot_em()
        matched = df[df["名称"].str.contains(keyword, na=False)]

        if matched.empty:
            return f"未找到包含「{keyword}」的股票，请尝试其他关键词。"

        result = f"🔍 搜索「{keyword}」的结果：\n"
        for _, row in matched.head(10).iterrows():
            result += f"  {row['代码']} - {row['名称']} | 最新价: {row['最新价']} | 涨跌幅: {row['涨跌幅']}%\n"

        if len(matched) > 10:
            result += f"\n  ...共找到 {len(matched)} 条结果，仅显示前 10 条"

        return result
    except Exception as error:
        return f"搜索失败: {str(error)}"


def get_stock_name(symbol: str) -> str:
    """根据代码获取股票名称（内部辅助函数）"""
    try:
        df = ak.stock_zh_a_spot_em()
        stock_data = df[df["代码"] == symbol]
        if not stock_data.empty:
            return stock_data.iloc[0]["名称"]
    except Exception:
        pass
    return symbol
