import React from 'react';
import { Card, Row, Col, Table, Typography } from 'antd';
import { dataSource, dataSource2, dataSource3, dataSource4, dataSource5, dataSource6, columns } from './InputDoc'

const { Title, Text } = Typography;

const InputExample = () => {
  return (
    <div>
      <Row gutter={[6, 6]}>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>Input</Title>
          <Text>test</Text>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>Input</Title>
          <Text>test</Text>
          <Table dataSource={dataSource2} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>Input</Title>
          <Text>test</Text>
          <Table dataSource={dataSource3} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>Input</Title>
          <Text>test</Text>
          <Table dataSource={dataSource4} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>Input</Title>
          <Text>test</Text>
          <Table dataSource={dataSource5} columns={columns} pagination={false} />
        </Col>
        <Col span={24}>
          <Title level={4} style={{ marginTop: 40 }}>Input</Title>
          <Text>test</Text>
          <Table dataSource={dataSource6} columns={columns} pagination={false} />
        </Col>

      </Row>

    </div>
  );
};

export default InputExample;