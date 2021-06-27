import React, { useEffect, useState } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { useHistory, useLocation } from 'react-router';

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const MainLayout = props => {

    const history = useHistory()
    const location = useLocation()
    const [selected, setSelected] = useState([location.pathname])

    useEffect(() => {
        setSelected([location.pathname])
    }, [location.pathname])

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
                        selectedKeys={selected}
                        defaultSelectedKeys={['/orcamento']}
                        defaultOpenKeys={['/orcamento']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key='Home' onClick={ _ => redirect('/') }>Home</Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="nome_do_usuario">
                            <Menu.Item key="/orcamento" onClick={ _ => redirect('/orcamento')}>Solicitar orçamento</Menu.Item>
                            <Menu.Item key="/automoveis" onClick={ _ => redirect('/automoveis')}>Meus automóveis</Menu.Item>
                            <Menu.Item key="/relatorios" onClick={ _ => redirect('/relatorios')}>Relatórios</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px'}}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            backgroundColor: 'white',
                            padding: 24,
                            margin: 0,
                            minHeight: 280
                        }}
                    >
                        <div className="site-layout-content">{props.children}</div>
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        </>
    )
};

export default MainLayout