import React from 'react';
import { Card, Row, Col, Table, Typography } from 'antd';
import { dataSource, dataSource2, dataSource3, dataSource4, dataSource5, dataSource6, dataSource7, dataSource8, columns } from './TableDoc'

const { Title, Text } = Typography;

const TableExample = () => {
  return (
    <div>
      <Row gutter={[6, 6]}>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>Table</Title>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>Column</Title>
          <Text>One of the Table columns prop for describing the table's columns, Column has the same API.</Text>
          <Table dataSource={dataSource2} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>ColumnGroup</Title>
          <Table dataSource={dataSource3} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>pagination</Title>
          <Table dataSource={dataSource4} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>expandable</Title>
          <Table dataSource={dataSource5} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>rowSelection</Title>
          <Table dataSource={dataSource6} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>scroll</Title>
          <Table dataSource={dataSource7} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>selection</Title>
          <Table dataSource={dataSource8} columns={columns} pagination={false} />
        </Col>

      </Row>

    </div>
  );
};

export default TableExample;