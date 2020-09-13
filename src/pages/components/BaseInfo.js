import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class BaseInfo extends Component {
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
          {this.props.BreadcrumbList.map((item, index) => {
            return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
          })}
        </Breadcrumb>
        <div style={{ fontSize: '20px', fontWeight: '600', marginTop: '8px' }}>
          {this.props.title}
        </div>
        {this.props.dsec ? (
          <div style={{ marginTop: '12px', fontSize: '14px' }}>
            {this.props.dsec}
          </div>
        ) : null}
      </div>
    );
  }
}

export default BaseInfo;
