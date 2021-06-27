import React, { useState } from 'react';

import RegistraAutomovel from '../../components/RegistraAutomovel'
import { Button, List } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

import { carros } from '../../carros_registrados';

const Automoveis = () => {

    const [showModal, setShowModal] = useState(false)

    const data = carros.map(carro => {
        return {
            title: carro.name,
            description: carro.year
        }
    })

    return (
        <>
            <List
                header='Meus automóveis'
                footer={<Button 
                    icon={<PlusOutlined/>}
                    onClick={_=>setShowModal(true)}
                    type='link'
                >Registrar automóvel</Button>}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => {
                    return <List.Item>
                        <List.Item.Meta
                            title={item.title}
                            description={item.description}
                        />
                    </List.Item>
                }}
            />
            <div style={{width: '100%', textAlign: 'center'}}>
                <div style={{display: 'inline-block', width: '50%', margin: '0 auto'}}>
                    
                    <RegistraAutomovel 
                        visible={showModal} 
                        onOk={_=>setShowModal(false)}
                        onCancel={_=>setShowModal(false)}
                    />
                    
                </div>
            </div>
        </>
    )
};

export default Automoveis;