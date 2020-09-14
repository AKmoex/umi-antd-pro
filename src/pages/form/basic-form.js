import React, { Component } from 'react';
import {
  Form,
  Input,
  Space,
  DatePicker,
  Tooltip,
  InputNumber,
  Button,
  Radio,
  Select,
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import BaseInfo from '../components/BaseInfo.js';

class List extends Component {
  state = {
    value: 1,
  };
  formRef = React.createRef();

  render() {
    const layout = {
      labelCol: {
        span: 7,
      },
      wrapperCol: {
        span: 9,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 7,
        span: 16,
      },
    };

    const rangeConfig = {
      rules: [
        {
          type: 'array',
          required: true,
          message: '请选择起止日期',
        },
      ],
    };
    return (
      <div>
        <BaseInfo
          dsec="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
          title="基础表单"
          BreadcrumbList={['表单页', '基础表单']}
        />
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360, margin: '20px 20px' }}
        >
          <Form {...layout} ref={this.formRef} requiredMark={false}>
            <Form.Item
              name="title"
              label="标题"
              rules={[
                {
                  required: true,
                  message: '请输入标题',
                },
              ]}
            >
              <Input placeholder="给目标起个名字" />
            </Form.Item>
            <Form.Item name="range-picker" label="起止时间" {...rangeConfig}>
              <DatePicker.RangePicker />
            </Form.Item>
            <Form.Item
              name="description"
              label="目标描述"
              rules={[
                {
                  required: true,
                  message: '请输入目标描述',
                },
              ]}
            >
              <Input.TextArea placeholder="请输入你的阶段性工作目标" />
            </Form.Item>
            <Form.Item
              name="standard"
              label="衡量标准"
              rules={[
                {
                  required: true,
                  message: '请输入衡量标准',
                },
              ]}
            >
              <Input.TextArea placeholder="输入衡量标准" />
            </Form.Item>
            <Form.Item
              name="client"
              label={
                <span>
                  客户 (选填)&nbsp;
                  <Tooltip title="目标的服务对象">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </span>
              }
            >
              <Input placeholder="请描述你服务的客户,内部客户直接 @姓名/工号" />
            </Form.Item>
            <Form.Item name="invitor" label="邀评人 (选填)">
              <Input placeholder="请直接 @姓名/工号，最多可邀请5人" />
            </Form.Item>
            <Form.Item name="weight" label="权重 (选填)">
              <InputNumber min={0} max={100} placeholder="请输入" />
            </Form.Item>
            <Form.Item label="目标公开">
              <Form.Item name="publicValue">
                <Radio.Group
                  onChange={this.handleChangeRadio.bind(this)}
                  value={this.state.value}
                >
                  <Radio value={1}>公开</Radio>
                  <Radio value={2}>部分公开</Radio>
                  <Radio value={3}>部分公开</Radio>
                </Radio.Group>
              </Form.Item>

              {this.state.value === 2 ? (
                <Form.Item name="publicPeople">
                  <Select placeholder="公开给">
                    <Select.Option value="colleague1">同事甲</Select.Option>
                    <Select.Option value="colleague2">同事乙</Select.Option>
                    <Select.Option value="colleague3">同事丙</Select.Option>
                  </Select>
                </Form.Item>
              ) : null}
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.handleButtonClick.bind(this)}
                >
                  提交
                </Button>
                <Button>保存</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }

  handleChangeRadio(e) {
    this.setState({
      value: e.target.value,
    });
  }
  handleButtonClick() {
    this.formRef.current
      .validateFields()
      .then(value => {
        console.log(value);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default List;
