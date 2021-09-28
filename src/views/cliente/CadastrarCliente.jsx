import React, { useState } from "react";

import { Form, Input, Button, InputNumber, Row, Col, Upload, Tag, message } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { mask } from '../../helpers/mask';
import axios from "axios";

const { Dragger } = Upload;

const required = (message) => {
    return [
        {
            required: true,
            message
        }
    ]
}

const CadastrarCliente = () => {

    const [tags, setTags] = useState([]);
    const [formInstance] = Form.useForm();
    
    function onFinish(values) {
        console.log('values', values)
        axios.post('http://localhost:8000/cliente/cadastrar-cliente', values)
        .then(res => {
            if ( res.status == 200 ) {
                message.success('Cliente cadastrado com sucesso!');
            }
        })
        .catch( err => {

        })
    }

    function fetchAddress(cep) {
        console.log('cep', cep)
        axios.get('http://localhost:8000/endereco/obter-endereco-por-cep', {
            params: {
                cep
            }
        })
        .then(res => {
            if ( res.status == 200 && res.data ) {
                let data = {};

                if ( res.data.bairro ) {
                    data.bairro = res.data.bairro.nome;
                }
                if ( res.data.cidade ) {
                    data.nome_cidade = res.data.cidade.nome;
                }
                if ( res.data.logradouro ) {
                    data.nome_logradouro = res.data.logradouro.nome_logradouro;
                    // data.complemento = res.data.logradouro.complemento;
                    // data.numero = res.data.logradouro.numero;
                }

                if ( data ) {
                    formInstance.setFieldsValue({
                        ...data
                    });
                }
            }
        })
        .catch(err => {
        })
    }

    const renderTags = () => {
        if ( tags.length > 0 ) {
            return tags.map((tag, idx) => {
                return <Tag style={{marginTop: 7}} key={idx}>{tag}</Tag>
            })
        }
    }

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    return (
        <>
            <Form onFinish={onFinish} form={formInstance} onValuesChange={(value, values) => {
                formInstance.setFieldsValue({
                    ...values,
                    cnpj: mask(values.cnpj)
                })
            }}>

                <Row>
                    <Col span={7} style={{marginRight: 30}}>
                        <Form.Item name='nome' label='Nome do cliente' rules={required('Insira um nome de cliente')}>
                            <Input></Input>
                        </Form.Item>
                    </Col>

                    <Col span={7} style={{marginRight: 30}}>
                        <Form.Item label='Nome do meio'>
                            <Input></Input>
                        </Form.Item>
                    </Col>

                    <Col span={7} style={{marginRight: 30}}>
                        <Form.Item label='Último nome'>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                </Row>


                <Form.Item name='cpf' label='CPF ou CNPJ' rules={required('Insira um CPF')}>
                    <Input maxLength={14}></Input>
                </Form.Item>

                <Row>
                    <Col span={3}>
                        <Form.Item name='cep' label='CEP' style={{marginRight: 30}}>
                            <Input maxLength={11} onChange={e => {
                                if ( e.target.value.length == 8 ) {
                                    fetchAddress(e.target.value);
                                }
                            }}></Input>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item name='nome_logradouro' label='Logradouro' style={{marginRight: 30}}>
                            <Input></Input>
                        </Form.Item>
                    </Col>

                    <Col span={3}>
                        <Form.Item name='numero' label='Número'>
                            <InputNumber></InputNumber>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item name='bairro' label='Bairro' style={{marginRight: 30}}>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={6}>
                        <Form.Item name='nome_cidade' label='Cidade' style={{marginRight: 30}}>
                            <Input></Input>
                        </Form.Item>
                    </Col>

                    <Col span={3}>
                        <Form.Item name='uf' label='UF' style={{marginRight: 30}}>
                            <Input></Input>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item name='complemento' label='Complemento' style={{marginRight: 30}}>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={6}>
                        <Form.Item name='telefone' label='Telefone' style={{marginRight: 30}}>
                            <Input></Input>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item name='email' label='Email' style={{marginRight: 30}}>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item label='Foto'>
                        <Upload
                            maxCount={1}
                            name='image'
                            listType="picture"
                            onChange={info => {
                                if ( info.file.status == 'uploading' ) {
                                    setTags([]);
                                } 
                            }}
                            customRequest={({onSuccess, onError, file}) => {
                                console.log('value', file)
                                getBase64(file, base64 => {
                                    axios.post('http://localhost:4005/image-recognitor', {base64})
                                    .then (res => {
                                        if ( res.data && Array.isArray(res.data) ) {
                                            let tags = res.data.map(item => {
                                                return item.key
                                            })
                                            setTags(tags);
                                            onSuccess(null, file);
                                        }
                                    })
                                    .catch(err => {
                                        setTags([]);
                                        onError();
                                    })
                                })
                            }}
                        >
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                        {renderTags()}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Cadastrar
                    </Button>
                </Form.Item>

            </Form>
        </>
    )
}

export default CadastrarCliente;