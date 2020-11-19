import React from 'react'; 
import { BrowserRouter, Route } from 'react-router-dom';
import tabela from '../pages/inicial/index';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={tabela}/>
        </BrowserRouter>
    )
}

export default Routes
