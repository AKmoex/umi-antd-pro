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
} from 'antd';
import '../../static/css/index.css';

class CardList extends Component {
  render() {
    <div>
      <BaseInfo
        title="卡片列表"
        BreadcrumbList={['列表页', '卡片列表']}
        dsec="段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。
"
      />
    </div>;
  }
}

export default connect()(CardList);
