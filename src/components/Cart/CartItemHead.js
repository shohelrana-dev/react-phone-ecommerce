import React from 'react';

const CartItemHead = () => {
    return (
        <div className="row text-capitalize my-4 d-none d-md-flex">
            <div className="col-10 col-md-2">Product</div>
            <div className="col-10 col-md-2">Name of Product</div>
            <div className="col-10 col-md-2">Price</div>
            <div className="col-10 col-md-2">Quantity</div>
            <div className="col-10 col-md-2">Remove</div>
            <div className="col-10 col-md-2">Total</div>
        </div>
    );
};

export default CartItemHead;