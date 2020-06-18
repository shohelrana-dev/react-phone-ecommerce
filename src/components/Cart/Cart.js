import React, {Component} from 'react';
import Title from "../global/Title";
import {ProductConsumer} from "../../Context/ProductContext";
import CartItemHead from "./CartItemHead";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";

class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    if(value.cart.length<1) return <EmptyCart/>
                    return (
                        <div className="container text-center">
                            <Title name='Your' title='Cart'/>
                            <CartItemHead/>
                            {value.cart.map((product) => <CartItem product={product} value={value} key={product.id}/>)}
                            <CartTotals value={value} history={this.props.history}/>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}

export default Cart;