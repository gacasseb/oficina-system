import React, { useEffect, useState } from 'react';

import RegistraAutomovel from '../../components/RegistraAutomovel'
import { Button, List, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

import axios from 'axios'

import { handleSubmit } from '../../shared/utils/form';

const Automoveis = () => {

    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

   function getData() {
        setLoading(true)
        axios.get('http://localhost:4000/v1/car')
        .then(res => {
            if ( res.status == 200 ) {
                setLoading(false)
                setData(res.data.data)
            }
        })
    }

    console.log('data', data)

    const content = () => {

        if ( loading ) {
            return (<Spin></Spin>)
        }

        if ( Array.isArray(data) && data.length > 0 ) {
            
            let list = data.map(row => {
                return {
                    title: row.name,
                    description: row.year
                }
            })

            return (
                <List
                    header='Meus automóveis'
                    footer={<Button 
                        icon={<PlusOutlined/>}
                        onClick={_=>setShowModal(true)}
                        type='link'
                    >Registrar automóvel</Button>}
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={item => {
                        return <List.Item>
                            <List.Item.Meta
                                title={item.title}
                                description={item.description}
                            />
                        </List.Item>
                    }}
                />
            )
        }
    }

    return (
        <>
            {content()}
            <div style={{width: '100%', textAlign: 'center'}}>
                <div style={{display: 'inline-block', width: '50%', margin: '0 auto'}}>
                    
                    <RegistraAutomovel
                        getData={getData}
                        visible={showModal}
                        setShowModal={setShowModal}
                    />
                    
                </div>
            </div>
        </>
    )
};

export default Automoveis;