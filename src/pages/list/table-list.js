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
  Tooltip,
  Table,
} from 'antd';
import {
  DownOutlined,
  UpOutlined,
  PlusOutlined,
  ReloadOutlined,
  CompressOutlined,
  SettingOutlined,
  FullscreenOutlined,
} from '@ant-design/icons';
import { connect } from 'umi';
import moment from 'moment';

class TableList extends Component {
  state = {
    isShow: false,
    isFold: true,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    this.props
      .dispatch({
        type: 'list/getTableValues',
        payload: {},
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }
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
    const cardExtraConten = (
      <div>
        <Button type="primary" icon={<PlusOutlined />}>
          新建
        </Button>
        <Tooltip title="刷新">
          <Button type="text" icon={<ReloadOutlined />}></Button>
        </Tooltip>
        <Tooltip title="密度">
          <Button type="text" icon={<CompressOutlined />}></Button>
        </Tooltip>
        <Tooltip title="列设置">
          <Button type="text" icon={<SettingOutlined />}></Button>
        </Tooltip>
        <Tooltip title="全屏">
          <Button type="text" icon={<FullscreenOutlined />}></Button>
        </Tooltip>
      </div>
    );
    const columns = [
      {
        title: '规则名称',
        dataIndex: 'ruleName',
        render: text => <a>{text}</a>,
      },
      {
        title: '描述',
        dataIndex: 'desc',
      },
      {
        title: '服务调用次数',
        dataIndex: 'callNo',
        sorter: {
          compare: (a, b) => a.callNo - b.callNo,
          multiple: 1,
        },
      },
      {
        title: '状态',
        dataIndex: 'status',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        title: '上次调度时间',
        dataIndex: 'callTime',
        render: text => {
          return moment(text).format('YYYY-MM-DD HH:mm');
        },
        sorter: {
          compare: (a, b) => a.callTime - b.callTime,
          multiple: 1,
        },
      },
    ];

    const data = this.props.tableValues;

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
        <Card
          style={{
            margin: '20px 20px',
          }}
          title="查询表格"
          extra={cardExtraConten}
        >
          <Table
            columns={columns}
            dataSource={data}
            style={{ marginTop: '-22px' }}
            loading={this.state.loading}
          />
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

const mapStateToProps = ({ list }) => {
  return {
    tableValues: list.tableValues,
  };
};

export default connect(mapStateToProps, null)(TableList);
