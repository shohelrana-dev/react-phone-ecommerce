import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default/Default";
import {ProductProvider} from "./Context/ProductContext";
import Modal from "./components/Modal/Modal";

class App extends Component {
    render() {
        return (
            <ProductProvider>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact component={ProductList}/>
                        <Route path="/product/:productId" component={ProductDetails}/>
                        <Route path="/cart" component={Cart}/>
                        <Route component={Default}/>
                    </Switch>
                    <Modal/>
                </Router>
            </ProductProvider>
        );
    }
}

export default App;
