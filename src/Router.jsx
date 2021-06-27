import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import Index from './views/Index.jsx'
import Automoveis from './views/automoveis/Automoveis.jsx'
import Orcamento from './views/orcamento/Orcamento.jsx'

const Router = props => {

    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path='/automoveis'>
                        <Automoveis/>
                    </Route>
                    <Route exact path='/orcamento'>
                        <Orcamento/>
                    </Route>
                    <Route exact path='/'>
                        <Index/>
                    </Route>
                </Layout>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;