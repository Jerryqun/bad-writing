---
nav: React
group: 常用包
toc: content
title: nice-modal-react
---

## @ebay/nice-modal-react

```js
import { EditOutlined, ExportOutlined, PlusOutlined } from "@ant-design/icons"
import NiceModal, { useModal } from "@ebay/nice-modal-react"
import { Button, DatePicker, Drawer, Form, Input, message, Space, Table } from "antd"
import React, { useState } from "react"

interface DataItem {
  id: string
  name: string
  email: string
  createdAt: string
}

const CrudDrawer = NiceModal.create(({ record }: { record?: DataItem }) => {
  const modal = useModal()
  const [form] = Form.useForm()

  React.useEffect(() => {
    form.setFieldsValue(record || {})
  }, [record])

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      modal.resolve(values)
      modal.hide()
    } catch (error) {
      console.error("表单验证失败:", error)
    }
  }

  return (
    <Drawer
      title={record ? "编辑记录" : "新建记录"}
      open={modal.visible}
      onClose={modal.hide}
      width={600}
      footer={
        <Space style={{ float: "right" }}>
          <Button onClick={modal.hide}>取消</Button>
          <Button type="primary" onClick={handleSubmit}>
            提交
          </Button>
        </Space>
      }
      destroyOnClose
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="姓名" rules={[{ required: true, message: "请输入姓名" }]}>
          <Input placeholder="张三" />
        </Form.Item>
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            { required: true, message: "请输入邮箱" },
            { type: "email", message: "邮箱格式不正确" }
          ]}
        >
          <Input placeholder="example@domain.com" />
        </Form.Item>
      </Form>
    </Drawer>
  )
})

// 导出Drawer组件
const ExportDrawer = NiceModal.create(() => {
  const modal = useModal()
  const [form] = Form.useForm()

  const handleExport = async () => {
    try {
      const values = await form.validateFields()
      message.info(`正在导出: ${JSON.stringify(values)}`)
      modal.hide()
    } catch (error) {
      console.error("导出参数错误:", error)
    }
  }

  return (
    <Drawer
      title="导出数据"
      open={modal.visible}
      onClose={modal.hide}
      width={500}
      footer={
        <Space style={{ float: "right" }}>
          <Button onClick={modal.hide}>取消</Button>
          <Button type="primary" onClick={handleExport}>
            导出
          </Button>
        </Space>
      }
    >
      <Form form={form} layout="vertical">
        <Form.Item name="dateRange" label="日期范围" rules={[{ required: true, message: "请选择日期范围" }]}>
          <DatePicker.RangePicker showTime />
        </Form.Item>
        <Form.Item name="format" label="导出格式" initialValue="excel">
          <Input />
        </Form.Item>
      </Form>
    </Drawer>
  )
})

const DemoPage = () => {
  const [data, setData] = useState<DataItem[]>([
    { id: "1", name: "张三", email: "zhangsan@example.com", createdAt: "2023-01-01" }
  ])

  const handleSubmit = (values: DataItem, id?: string) => {
    setData((prev) => {
      if (id) {
        return prev.map((item) => (item.id === id ? { ...item, ...values } : item))
      }
      return [
        ...prev,
        {
          ...values,
          id: Date.now().toString(),
          createdAt: new Date().toISOString()
        }
      ]
    })
    message.success(id ? "修改成功" : "新增成功")
  }

  const columns = [
    { title: "姓名", dataIndex: "name" },
    { title: "邮箱", dataIndex: "email" },
    { title: "创建时间", dataIndex: "createdAt" },
    {
      title: "操作",
      render: (_: any, record: DataItem) => (
        <Button
          type="link"
          icon={<EditOutlined />}
          onClick={() =>
            NiceModal.show(CrudDrawer, { record }).then((values: any) => values && handleSubmit(values, record.id))
          }
        />
      )
    }
  ]

  return (
    <NiceModal.Provider>
      <div style={{ padding: 24 }}>
        <Space style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => NiceModal.show(CrudDrawer).then((values: any) => values && handleSubmit(values))}
          >
            新建
          </Button>

          <Button icon={<ExportOutlined />} onClick={() => NiceModal.show(ExportDrawer)}>
            导出
          </Button>
        </Space>

        <Table columns={columns} dataSource={data} rowKey="id" bordered pagination={false} />
      </div>
    </NiceModal.Provider>
  )
}

export default DemoPage

```

## zustand

<a src='https://zustand-demo.pmnd.rs/' target='_blank'>文档</a>
