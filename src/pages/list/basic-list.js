import React, { Component } from 'react';
import BaseInfo from '../components/BaseInfo.js';

import { Card, Row, Col, Radio, Input } from 'antd';
import '../../static/css/index.css';

class BasicList extends Component {
  render() {
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
          title="你好"
          style={{ margin: '20px 20px' }}
          extra={
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
          }
        >
          <p>你噶</p>
          <p>你</p>
        </Card>
      </div>
    );
  }
  handleStatusChange() {
    console.log('你好');
  }
}

export default BasicList;
