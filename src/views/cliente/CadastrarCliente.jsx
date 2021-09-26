import React, { useState } from "react";

import { Form, Input, Button, InputNumber, Row, Col, Upload, Tag } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
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

    const [tags, setTags] = useState([])
    
    function onFinish(values) {
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
            <Form onFinish={onFinish}>

                <Form.Item name='nome' label='Nome do cliente' rules={required('Insira um nome de cliente')}>
                    <Input></Input>
                </Form.Item>

                <Form.Item name='cpf' label='CPF ou CNPJ' rules={required('Insira um CPF')}>
                    <Input maxLength={14}></Input>
                </Form.Item>

                <Row>
                    <Col span={3}>
                        <Form.Item name='cep' label='CEP' style={{marginRight: 30}}>
                            <Input maxLength={11}></Input>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item name='rua' label='Rua' style={{marginRight: 30}}>
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
                        <Form.Item name='cidade' label='Cidade' style={{marginRight: 30}}>
                            <Input></Input>
                        </Form.Item>
                    </Col>

                    <Col span={3}>
                        <Form.Item name='UF' label='UF' style={{marginRight: 30}}>
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