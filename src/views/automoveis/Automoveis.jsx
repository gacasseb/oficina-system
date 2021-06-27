import React, { useState } from 'react';

import RegistraAutomovel from '../../components/RegistraAutomovel'
import { Button, List } from 'antd'

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
                    <Button onClick={_=>setShowModal(true)}>
                        Registrar automovel
                    </Button>
                </div>
            </div>
        </>
    )
};

export default Automoveis;