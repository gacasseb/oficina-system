import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Form, Input, Select, Button } from 'antd'

const { TextArea } = Input

const Orcamento = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

   function getData() {
        axios.get('http://localhost:4000/v1/car')
        .then(res => {
            if ( res.status == 200 ) {
                setData(res.data.data)
            }
        })
    }

    let loading = false
    if ( Array.isArray(data) && data.length > 0 ) {
        var options = data.map((row, idx) => {
            return <Select.Option key={idx} value={row.name}>{row.name}</Select.Option>
        })
    } else { 
        loading = true
    }

    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <div style={{display: 'inline-block', width: '50%', margin: '0 auto'}}>
                <Form layout='vertical'>
                    <Form.Item label='Automóvel'>
                        <Select
                            loading={loading}
                            placeholder='Selecione um automóvel'
                            notFoundContent={
                                <Button type="dashed" block>
                                    Adicionar novo carro
                                </Button>
                            }
                        >
                            {options}
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