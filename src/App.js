/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, DownOutlined, DownloadOutlined } from '@ant-design/icons';
import Router from './pages/Router';
import Login from './pages/login/Login';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const loginMenu = (
    <Menu>
        <Menu.Item key="0">
            <a href="#">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="#">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

const Menu0 = (
    <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1', 'sub2', 'sub3']}
        style={{ height: '100%', borderRight: 0 }}
    >
        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
    </Menu>
);

const Menu1 = (
    <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1', 'sub2', 'sub3']}
        style={{ height: '100%', borderRight: 0 }}
    >
        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 21">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 22">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 23">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
    </Menu>
);

const App = () => {

    const [check, setCheck] = React.useState(false);
    const [menuSelect, setMenuSelect] = React.useState(0);

    return (
        <div>
            {/* <button onClick={() => setCheck(!check)} > 클릭</button> */}
            {check ? <Login /> :
                
                    <Layout>
                        <Sider width={60} className="site-layout-background" >
                            <Menu
                                className='ant-menu-dark'
                                theme='dark'
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1', 'sub2', 'sub3']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <Menu.Item key="sub1" icon={<UserOutlined style={{fontSize: 22}} />} style={{paddingLeft: 20}} 
                                title="subnav 11" onClick={() => setMenuSelect(0)}>
                                </Menu.Item>
                                <Menu.Item key="sub2" icon={<LaptopOutlined style={{fontSize: 22}} />} style={{paddingLeft: 20}} 
                                title="subnav 2" onClick={() => setMenuSelect(1)}>
                                </Menu.Item>
                                <Menu.Item key="sub3" icon={<NotificationOutlined style={{fontSize: 22}} />} style={{paddingLeft: 20}} 
                                title="subnav 3" onClick={() => setMenuSelect(2)}>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                    <Layout>
                        <Sider width={200} collapsible className="site-layout-background">
                        <img className="logo" src={'img/skt.jpg'} alt='asd' />
                            { menuSelect === 0 ? Menu0 : Menu1}
                        </Sider>

                        <Layout>
                    {/* <Header className="header">
                        <img className="logo" src={'img/skt.jpg'} alt='asd' />
                        <div className="login">
                            <a style={{ paddingRight: 10 }}>
                                <DownloadOutlined />
                            </a>
                            <Dropdown overlay={loginMenu} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Click me <DownOutlined />
                                </a >
                            </Dropdown>
                        </div>
                        <Menu className='ant-menu-dark' mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>

                    </Header> */}
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            {/* <div className="login">
                            <a style={{ paddingRight: 10 }}>
                                <DownloadOutlined />
                            </a>
                            <Dropdown overlay={loginMenu} trigger={['click']}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    Click me <DownOutlined />
                                </a >
                            </Dropdown>
                        </div> */}
                            {/* option1 */}
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
                </Layout>
            }
        </div>
    );
};

export default App;