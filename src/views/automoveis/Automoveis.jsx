import React, { useEffect, useState } from 'react';

import { Button, List, message, Spin, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios'

import RegistraAutomovel from '../../components/RegistraAutomovel'
import AtualizaAutomovel from '../../components/AtualizaAutomovel'

const Automoveis = () => {

    const [showModal, setShowModal] = useState(false)
    const [updateModal, showUpdateModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [item, setItem] = useState({})

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

    const content = () => {

        if ( loading ) {
            return (<Spin></Spin>)
        }

        if ( Array.isArray(data) && data.length > 0 ) {
            
            return (
                <List
                    header='Meus automóveis'
                    footer={<Button 
                        icon={<PlusOutlined/>}
                        onClick={_=>setShowModal(true)}
                        type='link'
                    >Registrar automóvel</Button>}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, row) => {
                        return (
                            <List.Item
                                actions={[<a key="list-loadmore-edit" onClick={ _ => {
                                    setItem(item)
                                    showUpdateModal(true)
                                }}>Editar</a>, <a key="list-loadmore-edit" onClick={ _ => {
                                    Modal.confirm({
                                        title: 'Têm certeza que deseja remover este veículo',
                                        onOk: () => {
                                            axios.delete(`http://localhost:4000/v1/car/destroy?id=${item.id}`)
                                            .then(res => {
                                                if ( res.status == 200 ) {
                                                    message.success('Automóvel removido com sucesso')
                                                    getData()
                                                }
                                            })
                                        }
                                    })
                                }}>Remover</a>]}
                            >
                                <List.Item.Meta
                                    title={item.name}
                                    description={item.year}
                                />
                            </List.Item>
                        )
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
                    <AtualizaAutomovel
                        item={item}
                        getData={getData}
                        visible={updateModal}
                        showUpdateModal={showUpdateModal}
                    />
                </div>
            </div>
        </>
    )
};

export default Automoveis;