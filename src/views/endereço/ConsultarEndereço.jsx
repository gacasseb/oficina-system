import React, { useState } from 'react';
import { Input, message } from 'antd'
import axios from 'axios'

import AppDescriptions from '../../components/AppDescriptions';

const { Search } = Input;


const ConsultarEndereço = () => {

    const [cep, setCep] = useState('')
    const [model, setModel] = useState([])

    function onSearch() {
        if ( cep.length == 8 ) {
            var url = `http://localhost:8000/endereco/obter-endereco-por-cep?cep=${cep}`
        } else {
            var url = `http://localhost:8000/endereco/obter-endereco-por-id?id=${cep}`
        }
        axios.get(url)
        .then( res => {
            if ( res.status == 200 ) {
                message.success('Endereço encontrado');
                console.log(res.data)
                let data = [];
                if ( res.data.cep ) {
                    data.push({
                        label: 'Cep',
                        data: res.data.cep
                    });
                }
                if ( res.data.bairro ) {
                    data.push({
                        label: 'Bairro',
                        data: res.data.bairro.nome
                    })
                }
                if ( res.data.cidade ) {
                    data.nome_cidade = res.data.cidade.nome;
                    data.push({
                        label: 'Cidade',
                        data: res.data.cidade.nome
                    })
                }
                if ( res.data.logradouro ) {
                    data.push({
                        label: 'Logradouro',
                        data: res.data.logradouro.nome_logradouro
                    });
                    data.push({
                        label: 'Complemento',
                        data: res.data.logradouro.complemento
                    });
                    data.push({
                        label: 'Número',
                        data: res.data.logradouro.numero
                    });
                }
                setModel(data);
            }
        })
        .catch( err => {
            message.error('Não foi encontrado um endereço');
        })
    }

    function content() {

        return (
            <>
                <AppDescriptions
                    title='Endereço'
                    items={model}
                />
            </>
        )
    }

    return (
        <>
            <Search placeholder="Insira um cep ou id" value={cep} allowClear maxLength={18} onChange={e => setCep(e.target.value)} onSearch={onSearch} style={{ width: 500 }} />
            { content() }
        </>
    );
}

export default ConsultarEndereço;