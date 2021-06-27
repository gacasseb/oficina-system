import React from 'react';

import { Form, Input, Select, Button, DatePicker } from 'antd'


const Automoveis = () => {
    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <div style={{display: 'inline-block', width: '50%', margin: '0 auto'}}>
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
                    <Form.Item label='Modelo'>
                        <Input placeholder='Insira o modelo do automóvel'></Input>
                    </Form.Item>
                    <Form.Item label='Ano do modelo'>
                        <DatePicker picker='year' placeholder='Insira o ano'></DatePicker>
                    </Form.Item>
                    <Form.Item label='Placa'>
                        <Input placeholder='Insira o registro de placa do automóvel'></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button>
                            Regitrar automóvel
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default Automoveis;