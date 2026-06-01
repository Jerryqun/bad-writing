import React, { useState, useRef, useEffect } from 'react';
import { Input, Button, Spin, Typography, Space, Tag, Alert } from 'antd';
import { SendOutlined, RobotOutlined, UserOutlined, StockOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const API_URL = 'http://localhost:8080/api/chat';

const QUICK_QUESTIONS = [
  '帮我查一下贵州茅台的实时股价',
  '分析一下比亚迪最近的走势',
  '搜索一下和"银行"相关的股票',
  '帮我看看 300750 的技术面',
];

const StockAgent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverOnline, setServerOnline] = useState<boolean | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    checkServer();
  }, []);

  const checkServer = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/health');
      if (response.ok) {
        setServerOnline(true);
      } else {
        setServerOnline(false);
      }
    } catch {
      setServerOnline(false);
    }
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: content.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content.trim(),
          history: messages.slice(-10),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessages([...updatedMessages, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages([
          ...updatedMessages,
          { role: 'assistant', content: `❌ 出错了: ${data.error}` },
        ]);
      }
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          role: 'assistant',
          content: '❌ 无法连接到后端服务，请确保已启动 stock-agent 服务。\n\n启动命令：\n```\ncd stock-agent && python3 server.py\n```',
        },
      ]);
      setServerOnline(false);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Space>
          <StockOutlined style={{ fontSize: 20, color: '#1890ff' }} />
          <Text strong style={{ fontSize: 16 }}>股小智 - A 股智能分析助手</Text>
        </Space>
        <Tag color={serverOnline ? 'green' : 'red'}>
          {serverOnline ? '服务在线' : '服务离线'}
        </Tag>
      </div>

      {serverOnline === false && (
        <Alert
          type="warning"
          showIcon
          message="后端服务未启动"
          description={
            <div>
              请先在终端中启动服务：
              <pre style={{ margin: '8px 0', padding: 8, background: '#f5f5f5', borderRadius: 4 }}>
                cd stock-agent{'\n'}python3 server.py
              </pre>
            </div>
          }
          style={{ margin: '0 12px 12px' }}
        />
      )}

      <div style={styles.messagesArea}>
        {messages.length === 0 && (
          <div style={styles.welcome}>
            <RobotOutlined style={{ fontSize: 48, color: '#1890ff', marginBottom: 16 }} />
            <Text type="secondary" style={{ fontSize: 14, marginBottom: 16 }}>
              你好！我是股小智，你的 A 股智能分析助手 📊
            </Text>
            <Text type="secondary" style={{ fontSize: 12, marginBottom: 16 }}>
              试试下面的问题，或直接输入你想了解的股票
            </Text>
            <div style={styles.quickQuestions}>
              {QUICK_QUESTIONS.map((question, index) => (
                <Tag
                  key={index}
                  color="blue"
                  style={styles.quickTag}
                  onClick={() => sendMessage(question)}
                >
                  {question}
                </Tag>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              ...styles.messageRow,
              justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            {message.role === 'assistant' && (
              <div style={styles.avatarBot}>
                <RobotOutlined style={{ color: '#fff', fontSize: 14 }} />
              </div>
            )}
            <div
              style={{
                ...styles.messageBubble,
                ...(message.role === 'user' ? styles.userBubble : styles.botBubble),
              }}
            >
              <pre style={styles.messageText}>{message.content}</pre>
            </div>
            {message.role === 'user' && (
              <div style={styles.avatarUser}>
                <UserOutlined style={{ color: '#fff', fontSize: 14 }} />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div style={{ ...styles.messageRow, justifyContent: 'flex-start' }}>
            <div style={styles.avatarBot}>
              <RobotOutlined style={{ color: '#fff', fontSize: 14 }} />
            </div>
            <div style={{ ...styles.messageBubble, ...styles.botBubble }}>
              <Spin size="small" /> <Text type="secondary" style={{ marginLeft: 8 }}>正在分析中...</Text>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div style={styles.inputArea}>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="输入股票名称或代码，如「茅台」「600519」..."
          disabled={loading}
          style={styles.input}
          suffix={
            <Button
              type="primary"
              icon={<SendOutlined />}
              onClick={() => sendMessage(inputValue)}
              loading={loading}
              disabled={!inputValue.trim()}
              size="small"
            />
          }
        />
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    border: '1px solid #e8e8e8',
    borderRadius: 12,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: 600,
    background: '#fff',
  },
  header: {
    padding: '12px 16px',
    borderBottom: '1px solid #e8e8e8',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#fafafa',
  },
  messagesArea: {
    flex: 1,
    overflowY: 'auto',
    padding: 16,
  },
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
  },
  quickQuestions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
    maxWidth: 400,
  },
  quickTag: {
    cursor: 'pointer',
    padding: '4px 12px',
    borderRadius: 16,
    fontSize: 12,
  },
  messageRow: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 16,
    gap: 8,
  },
  avatarBot: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    background: '#1890ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  avatarUser: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    background: '#52c41a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: '10px 14px',
    borderRadius: 12,
    fontSize: 14,
    lineHeight: 1.6,
  },
  userBubble: {
    background: '#1890ff',
    color: '#fff',
    borderBottomRightRadius: 4,
  },
  botBubble: {
    background: '#f0f2f5',
    color: '#333',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    margin: 0,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    background: 'transparent',
    border: 'none',
    padding: 0,
  },
  inputArea: {
    padding: 12,
    borderTop: '1px solid #e8e8e8',
    background: '#fafafa',
  },
  input: {
    borderRadius: 20,
    paddingLeft: 16,
  },
};

export default StockAgent;
