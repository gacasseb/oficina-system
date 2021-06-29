import React, { useState } from 'react';
import { Input, Button, Space, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { users } from '../../users';

import { useHistory, useLocation } from 'react-router';

const { Title } = Typography;


const Login = props => {
    const colors = {
        //'#0C1618' background color
        background: '#FFFFFF',
        primary: '#008F88',
        secondary: '#FAF4D3',
    }
    const history = useHistory()
    const redirect = (url) => {
        history.push(url)
    }

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    function loginHandler(login, password) {
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        if (users.find(conta => (conta.username == login && conta.password == password))) {
            redirect('/');
        } else {
            alert('Usuario e senha não registrados')
        }
    }

    return (
        <div style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 30,
            position: 'relative',
            backgroundColor: colors.background,
            display: 'flex',
            flex: 'auto',
            flexDirection: 'column',
            textTransform: 'uppercase',
        }}>
            <Space align="center" direction="vertical" style={{ justifyContent: 'center' }}>
                <Title style={{
                    fontFamily: 'sans-serif',
                    fontSize: 40,
                    fontWeight: 800,
                    color: colors.primary,
                    letterSpacing: 15,
                    textShadow: -1 - 1,
                }}> Oficina System </Title>
                <Input
                    id='loginInput'
                    size="large"
                    placeholder="Login"
                    onChange={(e) => { setLogin(e.target.value) }}
                    prefix={<UserOutlined />}
                    style={{ width: 300 }}
                />
                <Input.Password
                    size="large"
                    placeholder="Senha"
                    onChange={(e) => { setPassword(e.target.value) }}
                    prefix={<LockOutlined />}
                    style={{ width: 300 }}

                />
                <Space align="center">
                    <Button
                        size='large'
                        style={{
                            backgroundColor: colors.primary,
                            color: colors.secondary
                        }}
                        shape='round'
                        type="primary"
                        onClick={() => {
                            loginHandler(login, password)
                        }}> Entrar</Button>
                </Space>
            </Space>
        </div>
    )
}


export default Login