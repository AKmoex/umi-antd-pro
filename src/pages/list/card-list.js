import React, { Component } from 'react';
import BaseInfo from '../components/BaseInfo.js';
import { connect } from 'umi';

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
  Breadcrumb,
} from 'antd';
import '../../static/css/index.css';

class BaseHeader extends Component {
  render() {
    return (
      <div
        style={{
          background: '#fff',
          margin: '0',
          padding: '12px 24px 16px 24px',
        }}
      >
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/">首页</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>列表页</Breadcrumb.Item>
          <Breadcrumb.Item>卡片列表</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ fontSize: '20px', fontWeight: '600', marginTop: '8px' }}>
          卡片列表
        </div>

        <div
          style={{
            marginTop: '12px',
            fontSize: '14px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div>
              段落示意：蚂蚁金服务设计平台
              ant.design，用最小的工作量，无缝接入蚂蚁金服生态，
              提供跨越设计与开发的体验解决方案。
            </div>
            <div className="contentLink">
              <a>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"></img>
                快速开始
              </a>
              <a>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"></img>
                产品介绍
              </a>
              <a>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"></img>
                产品文档
              </a>
            </div>
          </div>
          <div
            style={{
              minWidth: '242px',
              marginLeft: '88px',
              textAlign: 'center',
              marginTop: '-20px',
            }}
          >
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
              style={{ width: '155px' }}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

class CardList extends Component {
  render() {
    return (
      <div>
        <BaseHeader />
      </div>
    );
  }
}

export default connect()(CardList);
