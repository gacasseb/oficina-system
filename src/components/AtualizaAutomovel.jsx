import React, { useEffect } from 'react';
import axios from 'axios'
import { Form, Input, Select, Modal, DatePicker, message } from 'antd'

const AtualizaAutomovel = props => {

    const [form] = Form.useForm()

    useEffect(() => {
        form.setFieldsValue(props.item)
    }, [props.item])

    const onSubmit = (values) => {
        axios.post(`http://localhost:4000/v1/car/update?id=${props.item.id}`, values)
        .then(res => {
            if ( res.status == 200 ) {
                message.success('Veículo atualizado com sucesso')
                props.showUpdateModal(false)
                props.getData()
            }
        })
    }

    return (
        <Modal {...props} onCancel={() => {props.showUpdateModal(false)}} onOk={form.submit} destroyOnClose={true}>
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

export default AtualizaAutomovel;