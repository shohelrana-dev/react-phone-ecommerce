import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Modal.css';
import {ProductConsumer} from "../../Context/ProductContext";

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    ({isOpenModal, modalProduct, closeModal}) => {
                        if (isOpenModal === false) return null;
                        const {title, price, img} = modalProduct;
                        return (<div className="modal-container">
                                <div className="main-modal">
                                    <h5>Item Added To Cart</h5>
                                    <div className="img-container">
                                        <img src={img} alt={title} className="img-fluid"/>
                                    </div>
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">Price : {price}</h5>
                                    <button
                                        className="main-btn mb-2 mt-3"
                                        onClick={()=>closeModal()}
                                    >
                                        Continue Shopping
                                    </button>
                                    <Link to="/cart">
                                        <button
                                            className="main-btn"
                                            onClick={()=>closeModal()}
                                        >
                                            Go To Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );}
                }

            </ProductConsumer>
        );
    }
}

export default Modal;