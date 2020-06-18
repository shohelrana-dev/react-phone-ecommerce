import React from 'react';
import PayPalBtn from "./PayPalBtn";

const CartTotals = (props) => {
    const {clearCart, cartTax, cartSubTotal, cartTotal} = props.value;
    return (
        <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8  text-capitalize text-right">
                <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    onClick={()=>clearCart()}
                >
                    Clear cart
                </button>
                <h5>
                    <span className="text-title"> Subtotal : </span>
                    <strong>$ {cartSubTotal}</strong>
                </h5>
                <h5>
                    <span className="text-title"> Tax : </span>
                    <strong>$ {cartTax}</strong>
                </h5>
                <h5 className="mb-3">
                    <span className="text-title"> Total : </span>
                    <strong>$ {cartTotal}</strong>
                </h5>
                <PayPalBtn total={cartTotal} history={props.history} clearCart={clearCart}/>
            </div>
        </div>
    );
};

export default CartTotals;