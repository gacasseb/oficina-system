import React from 'react';

import { Form, Input, Select, Button } from 'antd'

const { TextArea } = Input

const Orcamento = () => {
    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <div style={{display: 'inline-block', width: '50%', margin: '0 auto'}}>
                <Form layout='vertical'>
                    <Form.Item label='Automóvel'>
                        <Select
                            placeholder='Selecione um automóvel'
                            notFoundContent={
                                <Button type="dashed" block>
                                    Adicionar novo carro
                                </Button>
                            }
                        >
                        </Select>
                    </Form.Item>
                    <Form.Item label='Descrição do problema'>
                        <TextArea placeholder='Descreva o problema do carro'></TextArea>
                    </Form.Item>
                    <Form.Item>
                        <Button>
                            Solicitar orçamento
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Orcamento;