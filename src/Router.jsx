import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import Index from './views/Index.jsx'
import Automoveis from './views/automoveis/Automoveis.jsx'
import Orcamento from './views/orcamento/Orcamento.jsx'
import Relatorios from './views/relatorios/Relatorios.jsx'
import Login from './views/login/Login.jsx'
import Solicitacoes from './views/solicitacoes/Solicitacoes.jsx'
import ConsultarCliente from './views/cliente/ConsultarCliente.jsx'
import CadastrarCliente from './views/cliente/CadastrarCliente.jsx'
import Produto from './views/produtos/Produto.jsx'
import Serviço from './views/serviços/Serviço.jsx'
import ConsultarEndereço from './views/endereço/ConsultarEndereço.jsx'

const Router = props => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Layout>
                    <Route exact path='/automoveis'>
                        <Automoveis />
                    </Route>
                    <Route exact path='/orcamento'>
                        <Orcamento />
                    </Route>

                    <Route exact path='/relatorios'>
                        <Relatorios />
                    </Route>
                    <Route exact path='/solicitacoes'>
                        <Solicitacoes/>
                    </Route>
                    <Route path ='/cliente/consultar'>
                        <ConsultarCliente/>
                    </Route>
                    <Route path ='/cliente/cadastrar'>
                        <CadastrarCliente/>
                    </Route>
                    <Route path ='/produto'>
                        <Produto/>
                    </Route>
                    <Route path ='/serviço'>
                        <Serviço/>
                    </Route>
                    <Route path ='/consultar-endereço'>
                        <ConsultarEndereço/>
                    </Route>
                    <Route exact path='/'>
                        <Index />
                    </Route>
                </Layout>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;