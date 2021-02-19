import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
    ThunderboltOutlined,
    MailOutlined
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
                <Menu.Item key="1" icon={<ThunderboltOutlined />}>
                    <Link to="/v2">Aave v2</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<ThunderboltOutlined />}>
                    <Link to="/v1">Aave v1 (Coming Soon)</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<MailOutlined />}>
                    <Link to="/sign-up">Sign Up</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ThunderboltOutlined />}>
                    <Link to="/stream">Data Stream Test</Link>
                </Menu.Item>
            </Menu>
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {props.children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}
