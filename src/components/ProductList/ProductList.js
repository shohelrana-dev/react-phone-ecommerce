import React, {Component} from 'react';
import Title from "../global/Title";
import {ProductConsumer} from "../../Context/ProductContext";
import Product from "../Product/Product";

class ProductList extends Component {
    render() {
        return (
            <ProductConsumer>
                {({products, getCartItem}) => (
                    <div className="container py-5">
                        <Title name="Our" title="Products"/>
                        <div className="row">
                            {
                                products.map( (product, index) =>
                                    <Product
                                    product={product}
                                    getCartItem={getCartItem}
                                    key={product.id}
                                />)
                            }
                        </div>
                    </div>
                )}
            </ProductConsumer>
        );
    }
}

export default ProductList;