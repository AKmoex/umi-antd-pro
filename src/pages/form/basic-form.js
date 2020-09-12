import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class List extends Component {
  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <a href="/admin">首页</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>表单页面</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default List;
