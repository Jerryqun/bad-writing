"""
股票 Agent 工具集
基于新浪财经 API 获取 A 股数据，提供给 Agent 调用
"""
import re
import json
import requests
from langchain_core.tools import tool

SINA_HEADERS = {"Referer": "https://finance.sina.com.cn"}
REQUEST_TIMEOUT = 10


def _get_sina_symbol(symbol: str) -> str:
    """将纯数字代码转为新浪格式（sh600519 / sz000001）"""
    symbol = symbol.strip()
    if symbol.startswith(("sh", "sz")):
        return symbol
    if symbol.startswith(("6", "9")):
        return f"sh{symbol}"
    return f"sz{symbol}"


def _parse_sina_realtime(raw_text: str) -> dict:
    """解析新浪实时行情数据"""
    match = re.search(r'hq_str_(\w+)="(.+)"', raw_text)
    if not match:
        return {}
    fields = match.group(2).split(",")
    if len(fields) < 32:
        return {}
    return {
        "name": fields[0],
        "open": fields[1],
        "yesterday_close": fields[2],
        "current_price": fields[3],
        "high": fields[4],
        "low": fields[5],
        "buy_price": fields[6],
        "sell_price": fields[7],
        "volume": fields[8],
        "amount": fields[9],
        "date": fields[30],
        "time": fields[31],
    }


def _get_kline_data(symbol: str, datalen: int = 60) -> list:
    """从新浪获取日K线数据"""
    sina_symbol = _get_sina_symbol(symbol)
    url = "https://quotes.sina.cn/cn/api/jsonp_v2.php/callback/CN_MarketDataService.getKLineData"
    params = {
        "symbol": sina_symbol,
        "scale": "240",
        "ma": "5,10,20,60",
        "datalen": str(datalen),
    }
    resp = requests.get(url, params=params, timeout=REQUEST_TIMEOUT)
    text = resp.text
    json_match = re.search(r"callback\((.+)\)", text)
    if not json_match:
        return []
    return json.loads(json_match.group(1))


@tool
def get_stock_realtime_price(symbol: str) -> str:
    """查询 A 股股票的实时行情数据。

    Args:
        symbol: 股票代码，如 "600519"（贵州茅台）、"000001"（平安银行）
    """
    try:
        sina_symbol = _get_sina_symbol(symbol)
        url = f"https://hq.sinajs.cn/list={sina_symbol}"
        resp = requests.get(url, headers=SINA_HEADERS, timeout=REQUEST_TIMEOUT)
        data = _parse_sina_realtime(resp.text)

        if not data:
            return f"未找到股票代码 {symbol} 的数据，请检查代码是否正确。A 股代码为 6 位数字。"

        current_price = float(data["current_price"])
        yesterday_close = float(data["yesterday_close"])
        price_change = current_price - yesterday_close
        price_change_pct = (price_change / yesterday_close) * 100 if yesterday_close else 0
        volume_wan = float(data["volume"]) / 100
        amount_yi = float(data["amount"]) / 100000000

        result = (
            f"📊 {data['name']}（{symbol}）实时行情\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"最新价: {current_price} 元\n"
            f"涨跌幅: {price_change_pct:+.2f}%\n"
            f"涨跌额: {price_change:+.2f} 元\n"
            f"今开: {data['open']} | 昨收: {data['yesterday_close']}\n"
            f"最高: {data['high']} | 最低: {data['low']}\n"
            f"成交量: {volume_wan:.0f} 手\n"
            f"成交额: {amount_yi:.2f} 亿元\n"
            f"数据时间: {data['date']} {data['time']}"
        )
        return result
    except Exception as error:
        return f"查询实时行情失败: {str(error)}"


@tool
def get_stock_history(symbol: str, days: int = 30) -> str:
    """查询 A 股股票的历史行情数据。

    Args:
        symbol: 股票代码，如 "600519"
        days: 查询最近多少天的数据，默认30天，最大120天
    """
    try:
        days = min(days, 120)
        kline_data = _get_kline_data(symbol, datalen=days)

        if not kline_data:
            return f"未找到股票 {symbol} 近 {days} 天的历史数据。"

        stock_name = get_stock_name_internal(symbol)
        latest = kline_data[-1]
        earliest = kline_data[0]
        price_change = float(latest["close"]) - float(earliest["close"])
        price_change_pct = (price_change / float(earliest["close"])) * 100

        highs = [float(d["high"]) for d in kline_data]
        lows = [float(d["low"]) for d in kline_data]
        volumes = [float(d["volume"]) for d in kline_data]

        result = (
            f"📈 {stock_name}（{symbol}）近 {len(kline_data)} 个交易日历史行情\n"
            f"━━━━━━━━━━━━━━━━━━━━━━━━\n"
            f"期间涨跌: {price_change:+.2f} 元 ({price_change_pct:+.2f}%)\n"
            f"起始价: {earliest['close']} → 最新价: {latest['close']}\n"
            f"期间最高: {max(highs)} 元\n"
            f"期间最低: {min(lows)} 元\n"
            f"日均成交量: {sum(volumes) / len(volumes):.0f} 手\n"
            f"\n最近 5 个交易日：\n"
        )

        for day_data in kline_data[-5:]:
            day_change = float(day_data["close"]) - float(day_data["open"])
            day_change_pct = (day_change / float(day_data["open"])) * 100
            result += (
                f"  {day_data['day']} | 收盘: {day_data['close']} | "
                f"涨跌: {day_change_pct:+.2f}% | 成交量: {int(float(day_data['volume']))}手\n"
            )

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
        kline_data = _get_kline_data(symbol, datalen=80)

        if not kline_data or len(kline_data) < 20:
            return f"股票 {symbol} 数据不足，无法进行技术分析。"

        stock_name = get_stock_name_internal(symbol)
        closes = [float(d["close"]) for d in kline_data]
        latest_price = closes[-1]

        def moving_average(data, window):
            if len(data) < window:
                return None
            return sum(data[-window:]) / window

        ma5 = moving_average(closes, 5)
        ma10 = moving_average(closes, 10)
        ma20 = moving_average(closes, 20)
        ma60 = moving_average(closes, 60)

        def calc_ema(data, span):
            ema = [data[0]]
            multiplier = 2 / (span + 1)
            for price in data[1:]:
                ema.append(price * multiplier + ema[-1] * (1 - multiplier))
            return ema

        ema12 = calc_ema(closes, 12)
        ema26 = calc_ema(closes, 26)
        dif_line = [a - b for a, b in zip(ema12, ema26)]
        dea_line = calc_ema(dif_line, 9)
        macd_hist = [2 * (d - e) for d, e in zip(dif_line, dea_line)]

        deltas = [closes[i] - closes[i - 1] for i in range(1, len(closes))]
        gains = [max(d, 0) for d in deltas]
        losses = [max(-d, 0) for d in deltas]

        avg_gain = sum(gains[-14:]) / 14
        avg_loss = sum(losses[-14:]) / 14
        if avg_loss == 0:
            current_rsi = 100.0
        else:
            relative_strength = avg_gain / avg_loss
            current_rsi = 100 - (100 / (1 + relative_strength))

        trend_signals = []
        if ma5 and ma10 and ma20 and latest_price > ma5 > ma10 > ma20:
            trend_signals.append("多头排列（看涨）")
        elif ma5 and ma10 and ma20 and latest_price < ma5 < ma10 < ma20:
            trend_signals.append("空头排列（看跌）")
        else:
            trend_signals.append("震荡整理")

        if len(dif_line) >= 2 and len(dea_line) >= 2:
            if dif_line[-1] > dea_line[-1] and dif_line[-2] <= dea_line[-2]:
                trend_signals.append("MACD 金叉（买入信号）")
            elif dif_line[-1] < dea_line[-1] and dif_line[-2] >= dea_line[-2]:
                trend_signals.append("MACD 死叉（卖出信号）")

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
            f"  MA5:  {ma5:.2f}\n"
            f"  MA10: {ma10:.2f}\n"
            f"  MA20: {ma20:.2f}\n"
        )

        if ma60:
            result += f"  MA60: {ma60:.2f}\n"

        result += (
            f"\n【MACD】\n"
            f"  DIF:  {dif_line[-1]:.4f}\n"
            f"  DEA:  {dea_line[-1]:.4f}\n"
            f"  柱状: {macd_hist[-1]:.4f}\n"
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
    """查询 A 股股票的最新相关新闻。

    Args:
        symbol: 股票代码，如 "600519"
    """
    try:
        stock_name = get_stock_name_internal(symbol)

        url = f"https://feed.mix.sina.com.cn/api/roll/get"
        params = {
            "pageid": "153",
            "lid": "2516",
            "k": stock_name,
            "num": "8",
            "page": "1",
        }
        resp = requests.get(url, timeout=REQUEST_TIMEOUT)
        data = resp.json()

        articles = data.get("result", {}).get("data", [])
        if not articles:
            return f"📰 暂无 {stock_name}（{symbol}）的最新新闻。可以稍后再试。"

        result = f"📰 {stock_name}（{symbol}）最新新闻\n━━━━━━━━━━━━━━━━━━━━━━━━\n"
        for article in articles[:8]:
            title = article.get("title", "")
            pub_date = article.get("pub_date", "")
            media = article.get("media_name", "")
            result += f"\n📌 {title}\n   来源: {media} | 时间: {pub_date}\n"

        return result
    except Exception as error:
        return f"查询新闻失败: {str(error)}"


@tool
def search_stock_by_name(keyword: str) -> str:
    """根据股票名称关键词搜索股票代码。当用户说股票名称而不是代码时使用。

    Args:
        keyword: 股票名称关键词，如 "茅台"、"平安"、"比亚迪"
    """
    try:
        url = f"https://suggest3.sinajs.cn/suggest/type=11,12,13,14,15&key={keyword}&name=suggestdata"
        resp = requests.get(url, headers=SINA_HEADERS, timeout=REQUEST_TIMEOUT)
        text = resp.text

        match = re.search(r'"(.+)"', text)
        if not match or not match.group(1).strip():
            return f"未找到包含「{keyword}」的股票，请尝试其他关键词。"

        items = match.group(1).split(";")
        result = f"🔍 搜索「{keyword}」的结果：\n"
        count = 0

        for item in items:
            parts = item.split(",")
            if len(parts) >= 4:
                stock_code = parts[2]
                stock_name = parts[4] if len(parts) > 4 else parts[3]
                stock_type = parts[1]

                if stock_type not in ("11", "12"):
                    continue

                sina_sym = _get_sina_symbol(stock_code)
                try:
                    price_resp = requests.get(
                        f"https://hq.sinajs.cn/list={sina_sym}",
                        headers=SINA_HEADERS,
                        timeout=5,
                    )
                    price_data = _parse_sina_realtime(price_resp.text)
                    if price_data:
                        current_price = price_data["current_price"]
                        yesterday_close = float(price_data["yesterday_close"])
                        change_pct = ((float(current_price) - yesterday_close) / yesterday_close * 100) if yesterday_close else 0
                        result += f"  {stock_code} - {price_data['name']} | 最新价: {current_price} | 涨跌幅: {change_pct:+.2f}%\n"
                    else:
                        result += f"  {stock_code} - {stock_name}\n"
                except Exception:
                    result += f"  {stock_code} - {stock_name}\n"

                count += 1
                if count >= 10:
                    break

        if count == 0:
            return f"未找到包含「{keyword}」的 A 股股票。"

        return result
    except Exception as error:
        return f"搜索失败: {str(error)}"


def get_stock_name_internal(symbol: str) -> str:
    """根据代码获取股票名称（内部辅助函数）"""
    try:
        sina_symbol = _get_sina_symbol(symbol)
        url = f"https://hq.sinajs.cn/list={sina_symbol}"
        resp = requests.get(url, headers=SINA_HEADERS, timeout=5)
        data = _parse_sina_realtime(resp.text)
        if data:
            return data["name"]
    except Exception:
        pass
    return symbol
