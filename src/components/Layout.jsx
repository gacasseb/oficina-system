import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { useHistory } from 'react-router';

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const MainLayout = props => {

    const history = useHistory()

    const redirect = (url) => {
        history.push(url)
    }

    return (
        <>
            <Layout>
                <Header className="header">
                <div className="logo" />
                
                </Header>
                <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item onClick={_=>redirect('/')}>Home</Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                        <Menu.Item key="1" onClick={_ => redirect('/orcamento')}>Solicitar orçamento</Menu.Item>
                        <Menu.Item key="2" onClick={_ => redirect('/automoveis')}>Meus automóveis</Menu.Item>
                        <Menu.Item key="3" onClick={_=> redirect('/relatorios')}>Relatórios</Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        </>
    )
};

export default MainLayout