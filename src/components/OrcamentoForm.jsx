import React, { useState } from 'react';

import { Form, DatePicker, Input } from 'antd'

const OrcamentoForm = () => {

    const [form] = Form.useForm()
    const [finalPrice, setPriceFinal] = useState(null)

    const setFinalPrice = () => {
        let discount = form.getFieldValue('discount')
        let totalPrice = form.getFieldValue('total-price')
        
        let finalPrice = null
        if ( totalPrice >= discount ) {
            finalPrice = totalPrice - discount
        }

        setPriceFinal(finalPrice)
    }

    return (
        <Form layout='vertical' form={form}>
            <Form.Item label='Descrição'>
                <Input placeholder='Qual o tipo de manutenção será feita'></Input>
            </Form.Item>
            <Form.Item label='Data de início'>
                <DatePicker placeholder='Insira a data do início da manutenção'></DatePicker>
            </Form.Item>
            <Form.Item 
                label='Preço total'
                name='total-price'
                onChange={_=>setFinalPrice()}
            >
                <Input placeholder='Insira o preço total do serviço'></Input>
            </Form.Item>
            <Form.Item
                label='Desconto'
                name='discount'
                onChange={_=>setFinalPrice()}
            >
                <Input placeholder='Insira o desconto'></Input>
            </Form.Item>
            <Form.Item value={finalPrice} label='Preço final' name='final-price'>
                <Input ></Input>
            </Form.Item>
        </Form>
    );
};

export default OrcamentoForm;