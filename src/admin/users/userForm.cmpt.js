import React, { Component } from 'react';
import LoadingCmpt from '../../generics/loading.cmpt';
import firebase from 'firebase';
import firestore from '../../properties/firestore';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

const db = firestore.firestore();

class UserForm extends Component {

    constructor(props) {
        super(props)


        this.state = {
            loading: true,
            fields: {
                name: "Nombre",
                description: "",
                email: "",
                title: "",
                sku: "",
                price: "",
                availableSizes: "",
                phone: "",
            }
        }
    }
    /* changeValues = (event) => {
        let { id, value } = event.target;
        console.log('aa', id, value)

        this.setState({ id: value });
    }
 */

    changeValues(field, e) {
        let fields = this.state.fields;
        //  console.log('fields', fields)
        fields[field] = e.target.value;
        console.log('fields', fields)
        this.setState({ fields });
    }

    componentWillMount() {
        if (this.props.match) {
            let { id } = this.props.match.params;
            if (id) {
                this.getInfoUser(id)
            } else {
                this.setState({ loading: false });
            }
        }
    }

    getInfoUser(id) {
        firebase.collection().ref(`/users/${id}`).once('value', (snap) => {
            if (snap.val()) {
                let { name, email, phone } = snap.val();
                this.setState({ name, email, phone, id, loading: false }, () => {
                    M.updateTextFields();
                });
            } else {
                this.setState({ loading: false }, () => {
                    M.toast({ html: "No se encontro al usuario", classes: 'red darken-1' })
                });
            }
        });
    }

    deleteUser = (event) => {
        if (this.state.id) {
            firebase.collection().ref(`/users/${this.state.id}`).remove().then((result) => {
                M.toast({ html: `${this.state.name} fue eliminado correctamente.`, classes: 'green darken-1' });
                this.setState({ name: "", id: null, phone: "", email: "" });
            }).catch((error) => {
                // console.log(error);
                M.toast({ html: "No se logro eliminar al usuario.", classes: 'red darken-1' })
            })
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        let ref = firebase.database().ref(`/products`);
        console.log('data1', this.state.fields)
        let data = {
            description: this.state.fields.description,
            title: this.state.fields.description,
            price: this.state.fields.price,
            sku: this.state.fields.description.replace(" ", "_"),
            currencyId: 'USD',
            isFreeShipping: true,
            availableSizes: this.state.fields.availableSizes
        };
        console.log('data', data)
        if (this.state.id) {
            db.collection(`/products/${this.state.id}`).update(data).then((result) => {

                this.setState({ loading: false }, () => {
                    M.updateTextFields();
                    M.toast({ html: "Se actualizo el usuario correctamente.", classes: 'green darken-1' });
                });

            }).catch((error) => {
                console.log('error', error);
                this.setState({ loading: false }, () => {
                    M.updateTextFields();
                    M.toast({ html: "No se logro actualizar al usuario", classes: 'red darken-1' });
                });

            });
        } else {

            let key = ref.push().key;
            db.collection('products').add(data).then((result) => {
                this.setState({ loading: false, id: key }, () => {
                    M.updateTextFields();
                    M.toast({ html: "Se guardo el usuario correctamente.", classes: 'green darken-1' });
                });
            }).catch((error) => {
                this.setState({ loading: false }, () => {
                    M.updateTextFields();
                    M.toast({ html: "No se logro guardar al usuario", classes: 'red darken-1' })
                });
            });


        }

    }

    render() {
        if (this.state.loading) {
            return <LoadingCmpt />
        }
        return (
            <section id="userForm" className="container">
                <div className="row">
                    <div className="col s12 left-align">
                        <Link to={"/dashboard"}> <i className="material-icons cursor-pointer left">arrow_back</i> <i>Dashboard</i></Link>
                    </div>
                </div>
                <div className="row  z-depth-4">
                    <div className="col s12 center-align blue lighten-1">
                        <h6 className="white-text">{this.state.id ? "Edición de Producto" : "Nuevo Producto"}</h6>
                    </div>
                    <form className="col s12 mt-1" onSubmit={this.submitForm}>
                        <div className="row">
                            {/*   <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="title" type="text" className="validate" value={this.state.title}
                                    onChange={this.changeValues.bind(this, "title")}
                                />
                                <label htmlFor="title">Titulo del producto:</label>
                            </div>

                            <div className="input-field col s12">
                                <i className="material-icons prefix">Nombre</i>
                                <input id="sku" type="text" className="validate" value={this.state.sku}
                                    onChange={this.changeValues}
                                />
                                <label htmlFor="sku">descripcion detallada:</label>
                            </div>
 */}
                            <div className="input-field col s12">
                                <i className="material-icons prefix">description</i>
                                <input required id="description" type="text" className="validate"
                                    value={this.state.fields["description"]}
                                    onChange={this.changeValues.bind(this, "description")}// onChange={this.changeValues}
                                />
                                <label htmlFor="description">descripcion detallada:</label>
                            </div>

                            <div className="input-field col s12">
                                <i className="material-icons prefix">attach_money</i>
                                <input required id="price" type="text" className="validate"
                                    value={this.state.fields["price"]}
                                    onChange={this.changeValues.bind(this, "price")}
                                />
                                <label htmlFor="price">Precio:</label>
                            </div>
                            <div className="separator" />
                            <div className="input-field col s8 push-s1">
                                <div class="row"> <label htmlFor="availableSizes">Tipo:
                                </label>
                                    <select required class="browser-default" value={this.state.fields["availableSizes"]} onChange={this.changeValues.bind(this, "availableSizes")} id="availableSizes">
                                        <option value="" disabled >Choose your option</option>
                                        <option value="AGUARDIENTE">AGUARDIENTE</option>
                                        <option value="VODKA">VODKA</option>
                                        <option value="TEQUILA">TEQUILA</option>
                                        <option value="WHISKY">WHISKY</option>
                                        <option value="RON">RON</option>
                                        <option value="CERVEZA">CERVEZA</option>
                                        <option value="CIGARRILLOS">CIGARRILLOS</option>
                                        <option value="VINOS">VINOS</option>
                                        <option value="OTROS">OTROS</option>
                                    </select>

                                </div>
                            </div>

                            {/*   <div className="input-field col s12">
                                <label>Materialize Multi File Input</label>
                                <div class="file-field input-field">
                                    <div class="btn">
                                        <span>Buscar imagen</span>
                                        <input id="file" type="file"
                                            value={this.state.file}
                                            onChange={this.changeValues}
                                        />
                                    </div>

                                </div>
                            </div> */}

                        </div>

                        <div className="row">
                            <div className={`${this.state.id ? "col s6 right-align" : "col s12 center-align"} `}>
                                <button type="submit" className="btn btn-small waves-effect blue lighten-1 text-button"><i className="material-icons right">save</i>Guardar</button>
                            </div>
                            {
                                this.state.id ?
                                    <div className="col s6 left-align">
                                        <button type="button"
                                            onClick={this.deleteUser}
                                            className="btn btn-small waves-effect red lighten-1 text-button"><i className="material-icons right">close</i>Eliminar</button>
                                    </div>
                                    : null
                            }
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default UserForm;