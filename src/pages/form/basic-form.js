import React, { Component } from 'react';
import { Breadcrumb, Form, Input, Checkbox, DatePicker, Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

class List extends Component {
  render() {
    const layout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 9,
      },
    };
    const rangeConfig = {
      rules: [
        {
          type: 'array',
          required: true,
          message: 'Please select time!',
        },
      ],
    };
    const { RangePicker } = DatePicker;
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <a href="/">首页</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>表单页</Breadcrumb.Item>
          <Breadcrumb.Item>基础表单</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <Form {...layout}>
            <Form.Item label="标题" name="title">
              <Input />
            </Form.Item>
            <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
              <RangePicker />
            </Form.Item>
            <Form.Item name="introduction" label="目标描述">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="standard" label="衡量标准">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </span>
              }
              name="title"
            >
              <Input />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default List;
