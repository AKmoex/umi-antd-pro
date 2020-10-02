import React, { Component, Fragment } from 'react';
import BaseInfo from '../components/BaseInfo.js';
import {
  Card,
  Input,
  Form,
  Row,
  Col,
  DatePicker,
  Select,
  Button,
  Space,
} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

class TableList extends Component {
  state = {
    isShow: false,
    isFold: true,
  };

  render() {
    const formRef = React.createRef();
    const layout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 15,
      },
    };
    return (
      <div>
        <BaseInfo title="查询表格" BreadcrumbList={['列表页', '查询表格']} />
        <Card
          style={{
            margin: '20px 20px',
          }}
        >
          <Form {...layout} ref={formRef}>
            <Row style={{ marginBottom: '-25px' }}>
              <Col span={8}>
                <Form.Item name="rules" label="规则名称">
                  <Input placeholder="请输入"></Input>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="description" label="描述">
                  <Input placeholder="请输入"></Input>
                </Form.Item>
              </Col>
              {this.state.isShow ? (
                <Fragment>
                  <Col span={8}>
                    <Form.Item name="count" label="服务调用次数">
                      <Input placeholder="请输入"></Input>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="status" label="状态">
                      <Select placeholder="请选择">
                        <Select.Option value="closed">关闭</Select.Option>
                        <Select.Option value="running">运行中</Select.Option>
                        <Select.Option value="online">已上线</Select.Option>
                        <Select.Option value="error">异常</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="lastTime" label="上次调度时间">
                      <DatePicker showTime />
                    </Form.Item>
                  </Col>
                </Fragment>
              ) : null}
              <Col span={8}>
                <Space size="middle">
                  <Button>重置</Button>
                  <Button type="primary">查询</Button>
                  <Button
                    type="link"
                    icon={this.state.isFold ? <DownOutlined /> : <UpOutlined />}
                    onClick={this.handleShow}
                  >
                    展开
                  </Button>
                </Space>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    );
  }

  handleShow = () => {
    this.setState({
      isFold: !this.state.isFold,
      isShow: !this.state.isShow,
    });
  };
}

export default TableList;
