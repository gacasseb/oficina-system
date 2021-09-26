import React, { useState } from 'react';
import { Input, message } from 'antd'
import axios from 'axios'

import { mask } from '../../helpers/mask'
import AppDescriptions from '../../components/AppDescriptions';

const { Search } = Input;


const ConsultarCliente = () => {

    const [document, setDocument] = useState('')
    const [client, setClient] = useState({})

    function onSearch() {
        setClient({
            label: 'Nome',
            data: 'Gabriel Casseb',
        });

        return;
        axios.get('/rota/consulta-cliente')
        .then( res => {
            if ( res.status == 200 ) {
                message.success('Cliente encontrado com sucesso!');
                setClient(res.data);
            }
        })
        .catch( err => {
            message.error(err.data.message);
        })
    }

    function content() {

        return (
            <>
                <AppDescriptions
                    title='Cliente'
                    items={[
                        {...client}
                    ]}
                />
            </>
        )
    }

    return (
        <>
            <Search placeholder="Insira seu documento" value={document} allowClear maxLength={18} onChange={e => setDocument(mask(e.target.value))} onSearch={onSearch} style={{ width: 500 }} />
            { content() }
        </>
    );
}

export default ConsultarCliente;