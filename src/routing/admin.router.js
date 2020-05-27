import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductForm from '../admin/products/productForm.cmpt';
import ProductsList from "../admin/products/productsList.cmpt";

class AdminRouter extends Component {

    render() {
        return (

            <Switch>
                <Route path="/dashboard/product/:id?" component={ProductForm} />
                <Route path="/dashboard" component={ProductsList} />
            </Switch>

        )
    }

}

export default AdminRouter;