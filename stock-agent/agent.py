"""
股票智能助手 - 基于 LangChain + LangGraph + DeepSeek
使用 ReAct 模式的 Agent，支持查询股价、技术分析、新闻等
"""
import os
import sys
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent

from tools import (
    get_stock_realtime_price,
    get_stock_history,
    get_stock_technical_analysis,
    get_stock_news,
    search_stock_by_name,
)

load_dotenv()

SYSTEM_PROMPT = """你是一个专业的 A 股股票分析助手，名叫「股小智」。你可以帮用户：

1. 查询股票实时行情和历史数据
2. 进行技术面分析（均线、MACD、RSI 等）
3. 查询股票相关新闻
4. 根据名称搜索股票代码
5. 给出投资建议和分析

使用规则：
- 当用户提到股票名称（如"茅台"）时，先用 search_stock_by_name 搜索代码，再查询详情
- 当用户提到股票代码（如"600519"）时，直接查询
- 给出投资建议时，必须加上免责声明：投资有风险，以上分析仅供参考，不构成投资建议
- 用中文回答，语言简洁专业
- 主动为用户提供有价值的补充信息

你具备以下工具：
- get_stock_realtime_price: 查询实时行情
- get_stock_history: 查询历史行情
- get_stock_technical_analysis: 技术面分析
- get_stock_news: 查询相关新闻
- search_stock_by_name: 按名称搜索股票代码
"""

STOCK_TOOLS = [
    get_stock_realtime_price,
    get_stock_history,
    get_stock_technical_analysis,
    get_stock_news,
    search_stock_by_name,
]


def create_stock_agent():
    """创建股票分析 Agent"""
    api_key = os.getenv("DEEPSEEK_API_KEY")
    if not api_key:
        print("❌ 错误：未找到 DEEPSEEK_API_KEY")
        print("请在 stock-agent 目录下创建 .env 文件，写入：")
        print("DEEPSEEK_API_KEY=sk-your-api-key-here")
        print("\n获取 API Key：https://platform.deepseek.com/")
        sys.exit(1)

    llm = ChatOpenAI(
        model="deepseek-chat",
        api_key=api_key,
        base_url="https://api.deepseek.com/v1",
        temperature=0.3,
    )

    agent = create_react_agent(
        model=llm,
        tools=STOCK_TOOLS,
        prompt=SYSTEM_PROMPT,
    )

    return agent


def main():
    """主函数 - 交互式对话循环"""
    print("=" * 50)
    print("  📊 股小智 - A 股智能分析助手")
    print("  基于 DeepSeek + LangChain + LangGraph")
    print("=" * 50)
    print("  输入股票名称或代码开始查询")
    print("  输入 'quit' 或 'exit' 退出")
    print("=" * 50)

    agent = create_stock_agent()
    chat_history = []

    while True:
        try:
            user_input = input("\n🧑 你: ").strip()

            if not user_input:
                continue

            if user_input.lower() in ("quit", "exit", "q"):
                print("\n👋 再见！祝投资顺利！")
                break

            print("\n🤖 股小智正在分析...\n")

            response = agent.invoke({
                "messages": chat_history + [{"role": "user", "content": user_input}]
            })

            assistant_message = response["messages"][-1]
            answer = assistant_message.content

            print(f"🤖 股小智: {answer}")

            chat_history.append({"role": "user", "content": user_input})
            chat_history.append({"role": "assistant", "content": answer})

            if len(chat_history) > 20:
                chat_history = chat_history[-20:]

        except KeyboardInterrupt:
            print("\n\n👋 再见！祝投资顺利！")
            break
        except Exception as error:
            print(f"\n❌ 出错了: {str(error)}")
            print("请重试或换个问法。")


if __name__ == "__main__":
    main()
