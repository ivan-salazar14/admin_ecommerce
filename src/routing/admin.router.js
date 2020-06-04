import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductForm from '../admin/products/productForm.cmpt';
import ProductsList from "../admin/products/productsList.cmpt";
import OrdersList from "../admin/orders/ordersList.cmpt";

class AdminRouter extends Component {

    render() {
        return (

            <Switch>
                <Route path="/dashboard/product/:id?" component={ProductForm} />
                <Route path="/dashboard/list-products" component={ProductsList} />
                <Route path="/dashboard" component={OrdersList} />
            </Switch>

        )
    }

}

export default AdminRouter;