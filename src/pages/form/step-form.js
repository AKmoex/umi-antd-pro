import React, { Component, Fragment } from 'react';
import {
  Form,
  Input,
  Descriptions,
  Button,
  Select,
  Steps,
  Alert,
  Divider,
} from 'antd';

import BaseInfo from '../components/BaseInfo.js';

class StepForm extends Component {
  state = {
    current: 0,
    initialValues: {
      payAccount: 'antAlipay',
      receiveType: 'alipay',
      receiveAccount: 'test@example.com',
      receiveName: 'Alex',
      payAmount: 500,
    },
  };
  formRef1 = React.createRef();
  //formRef2 = React.createRef();

  componentDidMount() {
    //异步获取默认值给state
    //this.formRef.current.setFieldsValue(this.state.ii);
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
            current={this.state.current}
            style={{ maxWidth: '750px', margin: '10px auto' }}
          >
            <Steps.Step title="填写转账信息" />
            <Steps.Step title="确认转账信息" />
            <Steps.Step title="完成" />
          </Steps>

          <div className="steps-content">
            {this.state.current === 0 && (
              <Form
                {...layout}
                ref={this.formRef1}
                initialValues={this.state.initialValues}
              >
                <Form.Item name="payAccount" label="付款账户">
                  <Select>
                    <Select.Option value="antAlipay">
                      ant-design@alipay.com
                    </Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="收款账户">
                  <Input.Group compact>
                    <Form.Item name="receiveType" noStyle>
                      <Select>
                        <Select.Option value="alipay">支付宝</Select.Option>
                        <Select.Option value="bank">中国银行</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="receiveAccount"
                      noStyle
                      rules={[
                        { required: true, message: '输入收款人账户' },
                        { type: 'email', message: '账户名应为邮箱格式' },
                      ]}
                    >
                      <Input style={{ width: '50%' }} />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>
                <Form.Item
                  name="receiveName"
                  label="收款人姓名"
                  rules={[{ required: true, message: '请输入收款人姓名' }]}
                >
                  <Input></Input>
                </Form.Item>
                <Form.Item
                  name="payAmount"
                  label="转账金额"
                  rules={[{ required: true, message: '请输入转账金额' }]}
                >
                  <Input prefix="￥"></Input>
                </Form.Item>
              </Form>
            )}
            {this.state.current === 1 && (
              <Form {...layout}>
                <Alert
                  message="确认转账后，资金将直接打入对方账户，无法退回。"
                  type="info"
                  showIcon
                  closable
                  className="alert-style"
                />

                <Descriptions>
                  <Descriptions.Item label="付款账户">
                    {this.state.initialValues.payAccount}
                  </Descriptions.Item>
                  <Descriptions.Item label="收款账户">
                    {this.state.initialValues.receiveAccount}
                  </Descriptions.Item>
                  <Descriptions.Item label="收款人姓名">
                    {this.state.initialValues.receiveName}
                  </Descriptions.Item>
                  <Descriptions.Item label="转账金额">
                    {this.state.initialValues.payAmount}
                  </Descriptions.Item>
                </Descriptions>
                <Divider />
                <Form.Item
                  name="payPassword"
                  label="支付密码"
                  rules={[{ required: true, message: '请输入支付密码' }]}
                >
                  <Input type="password"></Input>
                </Form.Item>
              </Form>
            )}
          </div>
          <div className="steps-action">
            {this.state.current < 1 && (
              <Button type="primary" onClick={() => this.next()}>
                下一步
              </Button>
            )}
            {this.state.current === 1 && (
              <Button type="primary" onClick={this.handleClick}>
                提交
              </Button>
            )}
            {this.state.current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                上一步
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  next() {
    //先更新一下state
    // !!需要先校验一下格式
    this.formRef1.current
      .validateFields()
      .then(value => {
        console.log(this.state.initialValues);
        this.setState({
          initialValues: value,
        });
        const current = this.state.current + 1;
        this.setState({ current });
      })
      .catch(err => {});
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  handleClick() {
    // this.formRef2.current
    //   .validateFields()
    //   .then(value => {
    //     console.log(value);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
}

export default StepForm;
