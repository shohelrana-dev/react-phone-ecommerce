import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Product.css';
import {ProductConsumer} from '../../Context/ProductContext';

class Product extends Component {
    render() {
        let {id, title, img, price, inCart} = this.props.product;
        let cartItem = this.props.getCartItem(id);
        if (cartItem) {
            inCart = true
        }
        return (
            <ProductConsumer>
                {({addToCart, openModal})=>(
                    <div className="col-9 col-md-6 col-lg-3 mx-auto my-3 product">
                        <div className="card">
                            <div className="img-container p-5">
                                <Link to={'/product/' + id}>
                                    <img src={img} alt={title} className="card-img-top"/>
                                </Link>
                                <button
                                    className="cart-btn"
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        addToCart(id);
                                        openModal(id);
                                    }}
                                >
                                    {inCart ? (<p className="text-capitalize mb-0">
                                        In Cart
                                    </p>) : (<i className="fas fa-cart-plus"></i>)}
                                </button>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <p className="align-self-center mb-0">
                                    {title}
                                </p>
                                <h5 className="text-blue font-italic mb-0">
                                    <span className="mr-1">$</span>
                                    {price}
                                </h5>
                            </div>
                        </div>
                    </div>
                )}
            </ProductConsumer>
        );
    }
}


export default Product;