---
nav: 股票
group: 工具
toc: content
title: 股小智 - AI 股票助手
---

## 股小智 - A 股智能分析助手

基于 **DeepSeek + LangChain + LangGraph** 构建的 AI 股票分析 Agent，支持实时行情查询、技术面分析、新闻查询等功能。

### 使用前准备

在使用前，需要先启动后端 API 服务：

```bash
# 1. 配置 DeepSeek API Key
cd stock-agent
cp .env.example .env
# 编辑 .env 文件，填入你的 API Key

# 2. 启动服务
python3 server.py
```

### 在线对话

<code src="./components/StockAgent.tsx"></code>
