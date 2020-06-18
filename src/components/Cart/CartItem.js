import React from 'react';

const CartItem = (props) => {
    const blackBorder = {
        border: '2px solid #000',
        padding: '0px 12px',
        fontSize: '1.4rem',
        marginRight: '4px',
        verticalAlign: 'middle',
        borderRadius: '3px'
    }
    const {id, title, img, price, quantity, total} = props.product;
    const {cartQuantityIncrement, cartQuantityDecrement, removeCartProduct} = props.value;
    return (
        <div className="row my-4 mb-4">
            <div className="col-10 col-md-2 mx-auto mb-3 d-flex align-items-center justify-content-center">
                <img
                    src={img}
                    alt={title}
                    className="img-fluid"
                    style={{maxWidth: '80px'}}
                />
            </div>
            <div className="col-10 col-md-2  mx-auto mb-2 d-flex align-items-center justify-content-center">
                <span className="d-md-none">Product : </span>
                {title}
            </div>
            <div className="col-10 col-md-2 mx-auto mb-2 d-flex align-items-center justify-content-center">
                <span className="d-md-none">Price :&nbsp;</span>
                $ {price}
            </div>
            <div className="col-10 col-md-2 mx-auto mb-2 d-flex align-items-center justify-content-center">
                <span
                    style={blackBorder}
                    className="btn"
                    onClick={() => cartQuantityDecrement(id)}
                >-</span>
                <span style={blackBorder}>{quantity}</span>
                <span
                    style={blackBorder}
                    className="btn"
                    onClick={() => cartQuantityIncrement(id)}
                >+</span>
            </div>
            <div
                className="col-10 col-md-2 text-danger mx-auto mb-2 d-flex align-items-center justify-content-center"
            >
                <i
                    className="fa fa-trash"
                    style={{cursor: "pointer", padding: "10px"}}
                    onClick={()=>removeCartProduct(id)}
                > </i>
            </div>
            <div className="col-10 col-md-2 mx-auto mb-2 d-flex align-items-center justify-content-center">
                Item Total : $ {total}
            </div>
        </div>
    );
};

export default CartItem;