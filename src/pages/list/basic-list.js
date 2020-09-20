import React, { Component } from 'react';
import BaseInfo from '../components/BaseInfo.js';
import { connect } from 'umi';
import moment from 'moment';

import {
  Card,
  Row,
  Col,
  Radio,
  Input,
  Form,
  Button,
  Modal,
  Select,
  DatePicker,
  List,
  Avatar,
  Progress,
  Menu,
  Dropdown,
} from 'antd';
import '../../static/css/index.css';
import { PlusOutlined, DownOutlined } from '@ant-design/icons';

class BasicList extends Component {
  state = {
    loading: false,
    visible: false,
  };
  formRef = React.createRef();

  componentDidMount() {
    this.props.dispatch({
      type: 'list/getInitValues',
      payload: {},
    });
  }
  render() {
    const layout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 14,
      },
    };
    const extraContent = (
      <div>
        <Radio.Group
          onChange={this.handleStatusChange.bind(this)}
          defaultValue="a"
        >
          <Radio.Button value="a">全部</Radio.Button>
          <Radio.Button value="b">进行中</Radio.Button>
          <Radio.Button value="c">等待中</Radio.Button>
        </Radio.Group>
        <Input.Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: '300px', marginLeft: '20px' }}
        />
      </div>
    );
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            编辑
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            删除
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <BaseInfo
          title="标准表格"
          BreadcrumbList={['列表页', '标准表格']}
        ></BaseInfo>

        <Card
          bordered={false}
          style={{ margin: '20px 20px', boxSizing: 'border-box' }}
        >
          <Row style={{ textAlign: 'center' }}>
            <Col
              span={8}
              style={{ borderRight: '1px solid rgba(0, 21, 41, 0.08)' }}
            >
              <span className="card-span">我的待办</span>
              <p className="card-p">8个任务</p>
            </Col>
            <Col span={8}>
              <span className="card-span">本周任务平均处理时间</span>
              <p className="card-p">32分钟</p>
            </Col>
            <Col
              span={8}
              style={{ borderLeft: '1px solid rgba(0, 21, 41, 0.08)' }}
            >
              <span className="card-span">本周完成任务数</span>
              <p className="card-p">24个任务</p>
            </Col>
          </Row>
        </Card>
        <Card
          title="基本列表"
          style={{ margin: '20px 20px', padding: '0 20px' }}
          extra={extraContent}
        >
          <Button type="dashed" onClick={this.showModal} block>
            <PlusOutlined /> 添加
          </Button>
          <Modal
            visible={this.state.visible}
            title="任务添加"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={this.state.loading}
                onClick={this.handleOk}
              >
                Submit
              </Button>,
            ]}
            width={650}
          >
            <Form {...layout} ref={this.formRef}>
              <Form.Item
                name="taskName"
                label="任务名称"
                rules={[{ required: true, message: '请输入任务名称' }]}
              >
                <Input placeholder="请输入"></Input>
              </Form.Item>
              <Form.Item>
                <Form.Item
                  name="startTime"
                  label="开始时间"
                  rules={[
                    {
                      required: true,
                      message: '请选择起止日期',
                    },
                  ]}
                >
                  <DatePicker showTime />
                </Form.Item>
              </Form.Item>
              <Form.Item
                name="taskLeader"
                label="任务负责人"
                rules={[{ required: true, message: '请选择任务负责人' }]}
              >
                <Select placeholder="请选择">
                  <Select.Option value="zhouxiaoxiao">周晓晓</Select.Option>
                  <Select.Option value="panmaomao">潘毛毛</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="description"
                label="产品描述"
                rules={[
                  {
                    required: true,
                    message: '请输入至少五个字符',
                  },
                ]}
              >
                <Input.TextArea placeholder="请输入至少五个字符" />
              </Form.Item>
            </Form>
          </Modal>
          <List
            pagination={true}
            itemLayout="horizontal"
            dataSource={this.props.data}
            renderItem={item => (
              <List.Item className="basic-list">
                <List.Item.Meta
                  avatar={<Avatar size={48} shape="square" src={item.avatar} />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.subDescription}
                  style={{
                    flexGrow: '1',
                    flexShrink: '1',
                    flexBasis: '0%',
                  }}
                />

                <div className="basic-list-items">
                  <div>
                    <span>owner</span>
                    <p>{item.owner}</p>
                  </div>
                  <div>
                    <span>开始时间</span>
                    <p>{moment(item.updatedAt).format('YYYY-MM-DD HH:mm')}</p>
                  </div>
                  <div>
                    <Progress percent={item.percent} status="active" />
                  </div>
                </div>
                <div>
                  <Button type="link" htmlType="button">
                    编辑
                  </Button>
                  <Dropdown overlay={menu}>
                    <a
                      className="ant-dropdown-link"
                      onClick={e => e.preventDefault()}
                    >
                      更多 <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
              </List.Item>
            )}
          />
        </Card>
      </div>
    );
  }
  handleStatusChange() {
    console.log('你好');
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    this.formRef.current
      .validateFields()
      .then(value => {
        //发请求,增加一条内容
        //dispatch();
        //更新loading、visible状态
        this.setState({ loading: false, visible: false });
      })
      .catch(err => {
        // 重新将loading设置为false
        this.setState({ loading: false });
      });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
}

const mapStateToProps = ({ list }) => {
  return {
    data: list.data,
  };
};

export default connect(mapStateToProps, null)(BasicList);
