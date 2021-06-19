import React from 'react';

import Layout from '../components/Layout.jsx'

import { useHistory } from "react-router-dom";

const App = props => {

    const history = useHistory()

    return (
        <>
            <a>Home</a>
        </>
    )
};

export default App;