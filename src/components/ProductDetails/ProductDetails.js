import React, {Component} from 'react';
import {ProductContext} from '../../Context/ProductContext'
import {Link} from "react-router-dom";
import '../style/Button.css';

class ProductDetails extends Component {
    render() {

        const productId = this.props.match.params.productId;
        let {id, title, img, price, company, info, inCart} = this.context.getProduct(productId);
        const cartItem = this.context.getCartItem(productId);
        const {addToCart, openModal} = this.context;
        if (cartItem) {
            inCart = true
        }
        return (
            <div className="container py-5">

                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{title}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={img} alt={title} className="img-fluid"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>Model : {title}</h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                            Made By <span className="text-uppercase">{company}</span>
                        </h4>
                        <h4 className="text-blue">
                            Price <span>$</span>
                            {price}
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            Some Info About Product
                        </p>
                        <p className="text-muted lead">
                            {info}
                        </p>
                        <Link to="/">
                            <button className="main-btn mr-2">
                                Back To Products
                            </button>
                        </Link>
                        <button
                            className="main-btn"
                            disabled={inCart ? true : false}
                            onClick={() => {
                                addToCart(id);
                                openModal(id);
                            }}
                        >
                            {inCart ? 'In Cart' : 'Add To Cart'}
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

ProductDetails.contextType = ProductContext;
export default ProductDetails;