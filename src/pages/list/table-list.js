import React, { Component } from 'react';
import BaseInfo from '../components/BaseInfo.js';

class TableList extends Component {
  render() {
    return (
      <div>
        <BaseInfo
          title="查询表格"
          BreadcrumbList={['列表页', '查询表格']}
        ></BaseInfo>
      </div>
    );
  }
}

export default TableList;
