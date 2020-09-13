import React, { Component } from 'react';
import {
  Form,
  Input,
  Checkbox,
  DatePicker,
  Tooltip,
  InputNumber,
  Button,
  Select,
  Steps,
} from 'antd';

import BaseInfo from '../components/BaseInfo.js';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const layout = {
      labelCol: {
        span: 7,
      },
      wrapperCol: {
        span: 9,
      },
    };
    const { Step } = Steps;
    const { current } = this.state;

    return (
      <div>
        <BaseInfo
          dsec="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"
          title="分步表单"
          BreadcrumbList={['表单页', '分步表单']}
        />
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
            margin: '20px 20px',
          }}
        >
          <Steps
            current={current}
            style={{ maxWidth: '750px', margin: '10px auto' }}
          >
            <Step title="填写转账信息" />
            <Step title="确认转账信息" />
            <Step title="完成" />
          </Steps>
          <div className="steps-content">
            {current === 0 && (
              <Form {...layout}>
                <Form.Item label="付款账户">
                  <Select defaultValue="antAlipay">
                    <Option value="antAlipay">ant-design@alipay.com</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="收款账户">
                  <Input.Group compact>
                    <Form.Item name="receive-accounts" noStyle>
                      <Select defaultValue="alipay">
                        <Option value="alipay">支付宝</Option>
                        <Option value="bank">中国银行</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="account"
                      noStyle
                      rules={[{ required: true, message: '输入收款人账户' }]}
                    >
                      <Input
                        style={{ width: '50%' }}
                        defaultValue="example@test.com"
                      />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>
                <Form.Item label="收款人姓名">
                  <Input defaultValue="Alex"></Input>
                </Form.Item>
                <Form.Item
                  label="转账金额"
                  rules={[{ required: true, message: '请输入转账金额' }]}
                >
                  <Input prefix="￥" defaultValue="500"></Input>
                </Form.Item>
              </Form>
            )}
          </div>
          <div className="steps-action">
            {current < 1 && (
              <Button type="primary" onClick={() => this.next()}>
                下一步
              </Button>
            )}
            {current === 1 && (
              <Button
                type="primary"
                onClick={() => message.success('Processing complete!')}
              >
                提交
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                上一步
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
