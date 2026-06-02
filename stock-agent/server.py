"""
股票 Agent API 服务
基于 FastAPI，为前端 Web 界面提供对话接口
"""
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
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

app = FastAPI(title="股小智 API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
"""

STOCK_TOOLS = [
    get_stock_realtime_price,
    get_stock_history,
    get_stock_technical_analysis,
    get_stock_news,
    search_stock_by_name,
]


# ==================== Structured Output ====================

class StockInfoOutput(BaseModel):
    """从对话中提取的股票结构化信息"""
    name: str = Field(default="", description="股票名称，如 贵州茅台")
    symbol: str = Field(default="", description="股票代码，如 600519")
    current_price: str = Field(default="", description="当前价格，如 1304.51")


# ==================== LLM & Agent ====================

llm_instance = None
agent = None


def get_llm():
    global llm_instance
    if llm_instance is None:
        api_key = os.getenv("DEEPSEEK_API_KEY")
        if not api_key:
            raise RuntimeError("未配置 DEEPSEEK_API_KEY，请在 .env 文件中设置")
        llm_instance = ChatOpenAI(
            model="deepseek-chat",
            api_key=api_key,
            base_url="https://api.deepseek.com/v1",
            temperature=0.3,
        )
    return llm_instance


def get_agent():
    global agent
    if agent is None:
        agent = create_react_agent(
            model=get_llm(),
            tools=STOCK_TOOLS,
            prompt=SYSTEM_PROMPT,
        )
    return agent


# ==================== API Models ====================

class ChatRequest(BaseModel):
    message: str
    history: list = []


class StockInfo(BaseModel):
    name: str = ""
    symbol: str = ""
    current_price: str = ""


class ChatResponse(BaseModel):
    reply: str
    success: bool
    error: str = ""
    stock_info: StockInfo = StockInfo()


# ==================== Structured Extraction ====================

def extract_stock_info_via_llm(reply_text: str) -> StockInfo:
    """使用 LLM 的 with_structured_output 从回复中提取股票结构化信息"""
    try:
        structured_llm = get_llm().with_structured_output(StockInfoOutput)
        result = structured_llm.invoke(
            f"从以下回复中提取股票信息（名称、代码、当前价格）。如果没有相关信息则返回空字符串。\n\n{reply_text}"
        )
        return StockInfo(
            name=result.name,
            symbol=result.symbol,
            current_price=result.current_price,
        )
    except Exception:
        return StockInfo()


# ==================== API Routes ====================

@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        stock_agent = get_agent()

        messages = []
        for item in request.history:
            messages.append({"role": item["role"], "content": item["content"]})
        messages.append({"role": "user", "content": request.message})

        response = stock_agent.invoke({"messages": messages})
        assistant_message = response["messages"][-1]
        reply_text = assistant_message.content

        stock_info = extract_stock_info_via_llm(reply_text)

        return ChatResponse(
            reply=reply_text,
            success=True,
            stock_info=stock_info,
        )
    except Exception as error:
        return ChatResponse(reply="", success=False, error=str(error))


@app.get("/api/health")
async def health():
    return {"status": "ok", "name": "股小智 API"}


if __name__ == "__main__":
    import uvicorn
    print("🚀 股小智 API 服务启动中...")
    print("📍 地址: http://localhost:8080")
    print("📖 文档: http://localhost:8080/docs")
    uvicorn.run(app, host="0.0.0.0", port=8080)
