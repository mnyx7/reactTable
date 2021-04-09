import { Table, Switch, Radio, Form, Space } from 'antd';
import React,{useState} from 'react'


const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Surname',
    dataIndex: 'surname'
  },
  {
    title: 'Date of birth',
    dataIndex: 'dateOfBirth'
  },
  {
    title: 'Position',
    dataIndex: 'position'
  },
  {
    title: 'Phone number',
    dataIndex: 'phoneNumber'
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a className="ant-dropdown-link">
          Edit
        </a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    id: i,
    name: 'Minaya',
    surname: 'Yagubova',
    dateOfBirth: `${i}2`,
    position: 'Head of unit',
    phoneNumber: i+'2432435'
  });
}

const showHeader = true;
const pagination = { position: 'bottom' };

export const  Demo =() =>{

    const [state,setState] = useState({
        bordered: false,
        loading: false,
        pagination,
        size: 'default',
        title: undefined,
        showHeader,
        
        rowSelection: {},
        scroll: undefined,
        hasData: true,
        tableLayout: undefined,
        top: 'none',
        bottom: 'bottomRight',
    })


  
    const { xScroll, yScroll } = state;

    const scroll = {};
    if (yScroll) {
      scroll.y = 240;
    }
    if (xScroll) {
      scroll.x = '100vw';
    }

    const tableColumns = columns.map(item => ({ ...item, ellipsis: state.ellipsis }));
    if (xScroll === 'fixed') {
      tableColumns[0].fixed = true;
      tableColumns[tableColumns.length - 1].fixed = 'right';
    }

    return (
      <>

        <Table
          {... state}
          pagination={{ position: [ state.top,  state.bottom] }}
          columns={tableColumns}
          dataSource={state.hasData ? data : null}
          scroll={scroll}
        />
      </>
    );
  
}


