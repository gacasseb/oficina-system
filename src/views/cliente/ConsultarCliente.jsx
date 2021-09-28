import React, { useState } from 'react';
import { Input, message } from 'antd'
import axios from 'axios'

import { mask } from '../../helpers/mask'
import AppDescriptions from '../../components/AppDescriptions';

const { Search } = Input;


const ConsultarCliente = () => {

    const [document, setDocument] = useState('')
    const [client, setClient] = useState({})
    const [model, setModel] = useState([])

    function onSearch() {
        axios.get(`http://localhost:8000/cliente/consultar-cliente?documento=${document}`)
        .then( res => {
            if ( res.status == 200 ) {
                message.success('Cliente encontrado com sucesso!');
                setModel([
                    {
                        label: 'Nome',
                        data: res.data.nome
                    },
                    {
                        label: 'Email',
                        data: res.data.email
                    },
                    {
                        label: 'Documento',
                        data: mask(res.data.documento)
                    },
                    {
        
                    }
                ])
            }
        })
        .catch( err => {
            message.error('Não há cliente encontrado');
        })
    }

    function content() {

        return (
            <>
                <AppDescriptions
                    title='Cliente'
                    items={model}
                />
            </>
        )
    }

    return (
        <>
            <Search placeholder="Insira seu documento" value={document} allowClear maxLength={18} onChange={e => setDocument(mask(e.target.value))} onSearch={onSearch} style={{ width: 500, marginBottom: 40 }} />
            { content() }
        </>
    );
}

export default ConsultarCliente;