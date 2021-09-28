import React from 'react';
import axios from 'axios'
import { Form, Input, Select, Modal, DatePicker, message } from 'antd'

const RegistraProduto = props => {

    const [form] = Form.useForm()

    const onSubmit = (values) => {
        // axios.post('http://localhost:4000/v1/car/create', values)
        // .then(res => {
        //     if ( res.status == 200 ) {
        //         message.success('Veículo criado com sucesso')
        //         props.setShowModal(false)
        //         props.getData()
        //     }
        // })
    }

    return (
        <Modal {...props} onCancel={() => {props.setShowModal(false)}} onOk={form.submit} destroyOnClose={true}>
            <Form layout='vertical' form={form} onFinish={onSubmit}>
                {/* <Form.Item label='Tipo do automóvel' name='type'>
                    <Select
                        placeholder='Selecione o tipo do automóvel'
                    >
                        <Select.Option value='car'>
                            Carro
                        </Select.Option>
                        <Select.Option value='moto'>
                            Moto
                        </Select.Option>
                        <Select.Option value='truck'>
                            Caminhão
                        </Select.Option>
                    </Select>
                </Form.Item> */}
                <Form.Item name='name' label='Nome do produto' rules={[{required: true, message: 'Insira um nome para o produto'}]}>
                    <Input placeholder='Insira o nome do produto'></Input>
                </Form.Item>
                <Form.Item name='price' label='Preço'>
                    <Input placeholder='Insira o preço do produto'></Input>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RegistraProduto;