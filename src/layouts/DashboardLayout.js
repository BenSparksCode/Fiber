import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    SettingOutlined,
} from '@ant-design/icons';



const { Header, Content, Footer, Sider } = Layout;

export const DashboardLayout = (props) => {
    const [collapsed, setCollapsed] = useState(true)

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed)
    };

    const handleUserIconClick = (e) => {
        console.log(e);
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal">
                <Menu.Item key="1" icon={<DesktopOutlined />}>
                    <Link to="/">Live Flash Loans</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<SettingOutlined />}>
                    <Link to="/settings">Settings</Link>
                </Menu.Item>
                {/* <Menu.Item key="3" icon={<ExperimentOutlined />}>
                    <Link to="/stream">Data Stream Test</Link>
                </Menu.Item> */}
            </Menu>
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {props.children}
                    </div>
                </Content>
                {/* <Footer theme='dark' style={{ textAlign: 'center' }}>Fiber &copy;{new Date().getFullYear()} </Footer> */}
            </Layout>
        </Layout>
    );
}
