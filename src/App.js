/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Router from './pages/Router';
import { Link } from 'react-router-dom';


const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const App = () => {

    return (
        <div>
            <Layout>
                <Sider width={200} collapsible className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="example">
                            <Menu.Item key="1"><Link to="/excel">excel</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/button">button</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/table">table</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/input">input</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/card">card</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 1080,
                            }}
                        >
                            <Router />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
};

export default App;