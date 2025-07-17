"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[6560],{13595:function(r,t,n){n.r(t);var a=n(72269),s=n(93359),u=n(61788),c=n(19977),h=n(91558),o=n(24268),D=n(96057),g=n(85939),i=n(53683),d=n(80936),l=n(67294),_=n(28960),e=n(85893);function m(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"ebaynice-modal-react",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ebaynice-modal-react",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"@ebay/nice-modal-react"]}),(0,e.jsx)(o.Z,{lang:"js",children:_.texts[0].value})]})})})})}t.default=m},28960:function(r,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[{value:`import { EditOutlined, ExportOutlined, PlusOutlined } from "@ant-design/icons"
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
      console.error("\u8868\u5355\u9A8C\u8BC1\u5931\u8D25:", error)
    }
  }

  return (
    <Drawer
      title={record ? "\u7F16\u8F91\u8BB0\u5F55" : "\u65B0\u5EFA\u8BB0\u5F55"}
      open={modal.visible}
      onClose={modal.hide}
      width={600}
      footer={
        <Space style={{ float: "right" }}>
          <Button onClick={modal.hide}>\u53D6\u6D88</Button>
          <Button type="primary" onClick={handleSubmit}>
            \u63D0\u4EA4
          </Button>
        </Space>
      }
      destroyOnClose
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="\u59D3\u540D" rules={[{ required: true, message: "\u8BF7\u8F93\u5165\u59D3\u540D" }]}>
          <Input placeholder="\u5F20\u4E09" />
        </Form.Item>
        <Form.Item
          name="email"
          label="\u90AE\u7BB1"
          rules={[
            { required: true, message: "\u8BF7\u8F93\u5165\u90AE\u7BB1" },
            { type: "email", message: "\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E" }
          ]}
        >
          <Input placeholder="example@domain.com" />
        </Form.Item>
      </Form>
    </Drawer>
  )
})

// \u5BFC\u51FADrawer\u7EC4\u4EF6
const ExportDrawer = NiceModal.create(() => {
  const modal = useModal()
  const [form] = Form.useForm()

  const handleExport = async () => {
    try {
      const values = await form.validateFields()
      message.info(\`\u6B63\u5728\u5BFC\u51FA: \${JSON.stringify(values)}\`)
      modal.hide()
    } catch (error) {
      console.error("\u5BFC\u51FA\u53C2\u6570\u9519\u8BEF:", error)
    }
  }

  return (
    <Drawer
      title="\u5BFC\u51FA\u6570\u636E"
      open={modal.visible}
      onClose={modal.hide}
      width={500}
      footer={
        <Space style={{ float: "right" }}>
          <Button onClick={modal.hide}>\u53D6\u6D88</Button>
          <Button type="primary" onClick={handleExport}>
            \u5BFC\u51FA
          </Button>
        </Space>
      }
    >
      <Form form={form} layout="vertical">
        <Form.Item name="dateRange" label="\u65E5\u671F\u8303\u56F4" rules={[{ required: true, message: "\u8BF7\u9009\u62E9\u65E5\u671F\u8303\u56F4" }]}>
          <DatePicker.RangePicker showTime />
        </Form.Item>
        <Form.Item name="format" label="\u5BFC\u51FA\u683C\u5F0F" initialValue="excel">
          <Input />
        </Form.Item>
      </Form>
    </Drawer>
  )
})

const DemoPage = () => {
  const [data, setData] = useState<DataItem[]>([
    { id: "1", name: "\u5F20\u4E09", email: "zhangsan@example.com", createdAt: "2023-01-01" }
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
    message.success(id ? "\u4FEE\u6539\u6210\u529F" : "\u65B0\u589E\u6210\u529F")
  }

  const columns = [
    { title: "\u59D3\u540D", dataIndex: "name" },
    { title: "\u90AE\u7BB1", dataIndex: "email" },
    { title: "\u521B\u5EFA\u65F6\u95F4", dataIndex: "createdAt" },
    {
      title: "\u64CD\u4F5C",
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
            \u65B0\u5EFA
          </Button>

          <Button icon={<ExportOutlined />} onClick={() => NiceModal.show(ExportDrawer)}>
            \u5BFC\u51FA
          </Button>
        </Space>

        <Table columns={columns} dataSource={data} rowKey="id" bordered pagination={false} />
      </div>
    </NiceModal.Provider>
  )
}

export default DemoPage

`,paraId:0,tocIndex:0}]}}]);
