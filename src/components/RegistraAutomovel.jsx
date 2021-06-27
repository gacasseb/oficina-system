import React from 'react';

import { Form, Input, Select, Modal, DatePicker } from 'antd'

const RegistraAutomovel = props => {

    return (
        <Modal {...props}>
            <Form layout='vertical'>
                <Form.Item label='Tipo do automóvel'>
                    <Select
                        placeholder='Selecione o tipo do automóvel'
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
                <Form.Item label='Nome do modelo'>
                    <Input placeholder='Insira o modelo do automóvel'></Input>
                </Form.Item>
                <Form.Item label='Marca'>
                    <Input placeholder='Insira a marca do automóvel'></Input>
                </Form.Item>
                <Form.Item label='Ano do modelo'>
                    <DatePicker picker='year' placeholder='Insira o ano'></DatePicker>
                </Form.Item>
                <Form.Item label='Placa'>
                    <Input placeholder='Insira o registro de placa do automóvel'></Input>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RegistraAutomovel;