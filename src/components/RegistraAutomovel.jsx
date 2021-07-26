import React from 'react';
import { handleSubmit } from '../shared/utils/form';

import { Form, Input, Select, Modal, DatePicker, message } from 'antd'

const RegistraAutomovel = props => {

    const [form] = Form.useForm()

    const onSubmit = (values) => {
        handleSubmit(null, {
            method: 'post',
            url: `http://localhost:4000/v1/car/create`,
            data: values,
            onSuccess: res => {
                message.success('Veículo criado com sucesso!')
            }
        })
    }

    return (
        <Modal {...props} onOk={form.submit} destroyOnClose={true}>
            <Form layout='vertical' form={form} onFinish={onSubmit}>
                <Form.Item label='Tipo do automóvel'>
                    <Select
                        placeholder='Selecione o tipo do automóvel'
                        name='type'
                    >
                        <Select.Option value='carro'>
                            Carro
                        </Select.Option>
                        <Select.Option value='moto'>
                            Moto
                        </Select.Option>
                        <Select.Option value='caminhao'>
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