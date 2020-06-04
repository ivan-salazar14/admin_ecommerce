import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../login/login.cmpt';
import Dashboard from '../admin/dashboard.cmpt';
import ProductsList from "../admin/products/productsList.cmpt";

class RouterApp extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }

}

export default RouterApp;