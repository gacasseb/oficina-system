import React, { useEffect, useState } from 'react';

import { Button, List, message, Spin, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios'

import AtualizaAutomovel from '../../components/AtualizaAutomovel'
import RegistrarServiço from '../../components/RegistrarServiço';

const Serviço = () => {

    const [showModal, setShowModal] = useState(false)
    const [updateModal, showUpdateModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [item, setItem] = useState({})

    useEffect(() => {
        // getData()
        setData([
            {
                name: 'Troca de óleo',
                price: 'R$ 120.00'
            }
        ])
    }, [])

   function getData() {
        // setLoading(true)
        // axios.get('http://localhost:4000/v1/car')
        // .then(res => {
        //     if ( res.status == 200 ) {
        //         setLoading(false)
        //         setData(res.data.data)
        //     }
        // })
    }

    const content = () => {

        if ( loading ) {
            return (<Spin></Spin>)
        }

        if ( Array.isArray(data) && data.length > 0 ) {
            
            return (
                <List
                    header='Produtos cadastrados'
                    footer={<Button 
                        icon={<PlusOutlined/>}
                        onClick={_=>setShowModal(true)}
                        type='link'
                    >Registrar serviço</Button>}
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
                                    description={item.price}
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
                    <RegistrarServiço
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

export default Serviço;