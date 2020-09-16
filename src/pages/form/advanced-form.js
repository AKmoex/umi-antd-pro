import React, { Component } from 'react';

import BaseInfo from '../components/BaseInfo.js';

import {
  Card,
  Form,
  Input,
  Row,
  Col,
  Select,
  DatePicker,
  Table,
  Popconfirm,
} from 'antd';

class AdvancedForm extends Component {
  state = {
    data: [
      {
        key: '1',
        memberName: 'John Brown',
        memberID: '00001',
        branch: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        memberName: 'Jim Green',
        memberID: '00002',
        branch: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        memberName: 'Joe Black',
        memberID: '00003',
        branch: 'Sidney No. 1 Lake Park',
      },
    ],
  };
  formRef1 = React.createRef();
  formRef2 = React.createRef();
  formRef3 = React.createRef();

  render() {
    const columns = [
      {
        title: '成员姓名',
        dataIndex: 'memberName',
        key: 'memberName',
      },
      {
        title: '工号',
        dataIndex: 'memberID',
        key: 'memberID',
      },
      {
        title: '所属部门',
        dataIndex: 'branch',
        key: 'branch',
      },

      {
        title: '操作',
        key: 'action',
        render: (text, record) =>
          this.state.data.length >= 1 ? (
            <Popconfirm
              title="是否要删除此行"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a>删除</a>
            </Popconfirm>
          ) : null,
      },
    ];

    return (
      <div>
        <BaseInfo
          dsec="高级表单常见于一次性输入和提交大批量数据的场景。"
          title="高级表单"
          BreadcrumbList={['表单页', '高级表单']}
        />
        <Card title="仓库管理" style={{ margin: '20px 20px' }}>
          <Form layout="vertical" ref={this.formRef1} requiredMark={false}>
            <Row justify="space-between">
              <Col span={6}>
                <Form.Item
                  name="repoName"
                  label="仓库名"
                  rules={[{ required: true, message: '请输入仓库名称' }]}
                >
                  <Input placeholder="请输入仓库名称" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="repoDomain"
                  label="仓库域名"
                  rules={[{ required: true, message: '请选择' }]}
                >
                  <Input
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="请输入"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="repoAdmin"
                  label="仓库管理员"
                  rules={[{ required: true, message: '请选择管理员' }]}
                >
                  <Select placeholder="请选择管理员">
                    <Select.Option value="zhouxiaoxiao">周晓晓</Select.Option>
                    <Select.Option value="panmaomao">潘毛毛</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={6}>
                <Form.Item
                  name="approvedPeople"
                  label="审批人"
                  rules={[{ required: true, message: '请选择审批员' }]}
                >
                  <Select placeholder="请选择审批员">
                    <Select.Option value="zhouxiaoxiao">周晓晓</Select.Option>
                    <Select.Option value="panmaomao">潘毛毛</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="effectiveDdate"
                  label="生效日期"
                  rules={[
                    {
                      type: 'array',
                      required: true,
                      message: '请选择生效日期',
                    },
                  ]}
                >
                  <DatePicker.RangePicker />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="repoType"
                  label="仓库类型"
                  rules={[{ required: true, message: '请选择审批员外' }]}
                >
                  <Select placeholder="请选择仓库类型">
                    <Select.Option value="public">公开</Select.Option>
                    <Select.Option value="private">私密</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        <Card title="任务管理" style={{ margin: '20px 20px' }}>
          <Form layout="vertical" ref={this.formRef1} requiredMark={false}>
            <Row justify="space-between">
              <Col span={6}>
                <Form.Item
                  name="taskName"
                  label="任务名"
                  rules={[{ required: true, message: '请输入' }]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="taskDescription"
                  label="任务描述"
                  rules={[{ required: true, message: '请输入' }]}
                >
                  <Input placeholder="请输入" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="taskExecutor"
                  label="执行人"
                  rules={[{ required: true, message: '请选择执行人' }]}
                >
                  <Select placeholder="请选择管理员">
                    <Select.Option value="zhouxiaoxiao">周晓晓</Select.Option>
                    <Select.Option value="panmaomao">潘毛毛</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={6}>
                <Form.Item
                  name="taskApprovedPeople"
                  label="审批人"
                  rules={[{ required: true, message: '请选择审批员' }]}
                >
                  <Select placeholder="请选择审批员">
                    <Select.Option value="zhouxiaoxiao">周晓晓</Select.Option>
                    <Select.Option value="panmaomao">潘毛毛</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="taskEffectiveDdate"
                  label="生效日期"
                  rules={[
                    {
                      type: 'array',
                      required: true,
                      message: '请选择生效日期',
                    },
                  ]}
                >
                  <DatePicker.RangePicker />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="taskType"
                  label="任务类型"
                  rules={[{ required: true, message: '请选择任务类型' }]}
                >
                  <Select placeholder="请选择任务类型">
                    <Select.Option value="public">公开</Select.Option>
                    <Select.Option value="private">私密</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        <Card title="成员管理" style={{ margin: '20px 20px' }}>
          <Form ref={this.formRef1}>
            <Table
              columns={columns}
              dataSource={this.state.data}
              pagination={false}
            ></Table>
          </Form>
        </Card>
      </div>
    );
  }
  handleDelete = key => {
    const data = [...this.state.data];
    this.setState({
      data: data.filter(item => item.key !== key),
    });
  };
}
export default AdvancedForm;
