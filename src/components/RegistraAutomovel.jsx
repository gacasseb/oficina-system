import React from 'react';
import axios from 'axios'
import { Form, Input, Select, Modal, DatePicker, message } from 'antd'

const RegistraAutomovel = props => {

    const [form] = Form.useForm()

    const onSubmit = (values) => {
        console.log('values', values)
        axios.post('http://localhost:4000/v1/car/create', values)
        .then(res => {
            console.log('res', res)
            if ( res.status == 200 ) {
                message.success('Veículo criado com sucesso')
                props.setShowModal(false)
                props.getData()
            }
        })
    }

    return (
        <Modal {...props} onCancel={() => {props.setShowModal(false)}} onOk={form.submit} destroyOnClose={true}>
            <Form layout='vertical' form={form} onFinish={onSubmit}>
                <Form.Item label='Tipo do automóvel' name='type'>
                    <Select
                        placeholder='Selecione o tipo do automóvel'
                    >
                        <Select.Option value='car'>
                            Carro
                        </Select.Option>
                        {/* <Select.Option value='moto'>
                            Moto
                        </Select.Option> */}
                        <Select.Option value='truck'>
                            Caminhão
                        </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name='name' label='Nome do modelo' rules={[{required: true, message: 'Insira um nome para o modelo'}]}>
                    <Input placeholder='Insira o modelo do automóvel'></Input>
                </Form.Item>
                <Form.Item name='brand' label='Marca'>
                    <Input placeholder='Insira a marca do automóvel'></Input>
                </Form.Item>
                <Form.Item name='year' label='Ano do modelo'>
                    <DatePicker format='YYYY' picker='year' placeholder='Insira o ano'></DatePicker>
                </Form.Item>
                <Form.Item name='license' label='Placa'>
                    <Input placeholder='Insira o registro de placa do automóvel'></Input>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RegistraAutomovel;