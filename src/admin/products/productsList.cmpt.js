import React, { Component } from 'react';
import LoadingCmpt from '../../generics/loading.cmpt';
import { firestore } from '../../properties/firestore';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

const db = firestore.firestore();

class ProductsList extends Component {

    state = {
        products: [],
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
        db.collection("products").onSnapshot(function (querySnapshot) {
            var products = [];
            querySnapshot.forEach(function (doc) {
                let sale = doc.data();
                sale.id = doc.id;
                products.push(sale);
            });
            me.setState({ products: products, loading: false });
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
                        <h6 className="white-text">Productos</h6>
                    </div>
                    <div className="row">
                        <table className="highlight">
                            <thead>
                                <tr>
                                    <th className="center-align ">Nombre</th>
                                   <th className="center-align hide-on-small-only">Precio</th>
                                      <th className="center-align">Detalle</th>
                                    <th className="center-align">Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="center-align ">{value.description}</td>
                                               <td className="center-align hide-on-small-only">{value.price}</td>
                                                 <td className="center-align hide-on-small-only">{value.availableSizes[0]}</td> 
                                                <td className="center-align ">
                                                    <Link to={`/dashboard/product/${value.id}`} className="btn-floating red">
                    <i className="large material-icons">add</i>
                </Link></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>



                {/*    */}
            </div>
        )
    }


}


export default ProductsList;