import React, { Component } from 'react';
import LoadingCmpt from '../../generics/loading.cmpt';
import { firestore } from '../../properties/firestore';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

const db = firestore.firestore();

class OrdersList extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {});
    }


    proceedToCheckout = (value) => {
        /*  const {
             totalPrice,
             productQuantity,
             currencyFormat,
             currencyId,
         } = value;
         console.log('lllegooooooooo', value.id)
         */
        db.collection("sales").doc(value.id).update({
            delivered: true
        });
    }
    componentWillMount() {
        var me = this;
        db.collection("sales").onSnapshot(function (querySnapshot) {
            var sales = [];
            querySnapshot.forEach(function (doc) {
                let sale = doc.data();
                sale.id = doc.id;
                sales.push(sale);
            });
            me.setState({ orders: sales, loading: false });
        });
    }


    render() {
        if (this.state.loading) {
            return <LoadingCmpt />
        }

        return (
            <div className="container">
                <div className="row  z-depth-4">
                    <div className="col s12 center-align blue lighten-1">
                        <h6 className="white-text">Pedidos Pendientes</h6>
                    </div>
                    <div className="row">
                        <table className="highlight">
                            <thead>
                                <tr>
                                    <th className="center-align hide-on-small-only">Nombre</th>
                                    <th className="center-align">Direccion</th>
                                    <th className="center-align hide-on-small-only">Teléfono</th>
                                    <th className="center-align">Detalle</th>
                                    <th className="center-align hide-on-small-only">Total</th>
                                    <th className="center-align">Marcar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map((value, index) => {
                                        const listItems = value.cartProducts.map((number) =>
                                            <li>{number.price + " " + number.description}</li>
                                        );
                                        return (
                                            value.delivered !== true ?
                                                <tr key={index}>
                                                    <td className="center-align hide-on-small-only">{value.name}</td>
                                                    <td>{value.address}</td>
                                                    <td className="center-align hide-on-small-only">{value.phone}</td>
                                                    <td>
                                                        <ul>{listItems}</ul>
                                                    </td>
                                                    <td className="center-align hide-on-small-only">{value.total}</td>
                                                    <td className="center-align ">
                                                        <Link onClick={() => this.proceedToCheckout(value)} className="btn-floating btn-large blue">
                                                            check </Link>
                                                        {/*  <Link to={`/dashboard/user/${value.id}`} className="btn-flat waves-effect waves-light">
                                                        
                                                    </Link> */}
                                                    </td>
                                                </tr> : null
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="row  z-depth-4">
                    <div className="col s12 center-align blue lighten-1">
                        <h6 className="white-text">Pedidos Finalizados</h6>
                    </div>
                    <div className="row">
                        <table className="highlight">
                            <thead>
                                <tr>
                                    <th className="center-align hide-on-small-only">Nombre</th>
                                    <th className="center-align">Direccion</th>
                                    <th className="center-align hide-on-small-only">Teléfono</th>
                                    <th className="center-align">Detalle</th>
                                    <th className="center-align hide-on-small-only">Total</th>
                                    <th className="center-align">Marcar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map((value, index) => {

                                        const listItems = value.cartProducts.map((number) =>
                                            <li>{number.price + " " + number.description}</li>
                                        );
                                        return (
                                            value.delivered === true ?
                                                <tr key={index}>
                                                    <td className="center-align hide-on-small-only">{value.name}</td>
                                                    <td>{value.address}</td>
                                                    <td className="center-align hide-on-small-only">{value.phone}</td>
                                                    <td>
                                                        <ul>{listItems}</ul>
                                                    </td>
                                                    <td className="center-align hide-on-small-only">{value.total}</td>
                                                </tr> : null
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>



                {/*   <Link to="/dashboard/user" className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </Link> */}
            </div>
        )
    }


}


export default OrdersList;