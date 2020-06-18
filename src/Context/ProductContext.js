import React, {Component} from 'react';
import {storeProducts} from '../database/data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    constructor() {
        super();
        this.state = {
            products: storeProducts,
            cart: localStorage.getItem('cart') === null ? [] : JSON.parse(localStorage.getItem('cart')),
            isOpenModal: false,
            modalProduct: null,
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0,
        }
    }

    componentDidMount() {
        this.cartTotals();
    }

    addToCart = (id) => {
        let product = this.getProduct(id);
        let cart = this.state.cart;
        product.quantity = 1;
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        this.setState({cart: cart});
        this.cartTotals();
    }

    getCartItem = (id) => {
        let cartItems = this.state.cart;
        let cartItem = cartItems.find((product) => product.id === parseInt(id));
        return cartItem;
    }

    getProduct = (id) => {
        return this.state.products.find(product => product.id === parseInt(id));
    }

    openModal = (id) => {
        if (Number.isInteger(id)) {
            let modalProduct = this.getProduct(id);
            this.setState({
                isOpenModal: true,
                modalProduct: modalProduct
            });
        }

    }
    closeModal = () => {
        this.setState({
            isOpenModal: false,
            modalProduct: null
        });
    }

    cartQuantityIncrement = (id) => {
        const cartItem = this.getCartItem(id);
        if (cartItem.quantity >= 10) return;
        cartItem.quantity = cartItem.quantity + 1;
        cartItem.total = cartItem.price * cartItem.quantity;
        this.setState({
            cart: this.state.cart
        });
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
        this.cartTotals();
    }

    cartQuantityDecrement = (id) => {
        const cartItem = this.getCartItem(id);
        if (cartItem.quantity <= 1) return;
        cartItem.quantity = cartItem.quantity - 1;
        cartItem.total = cartItem.price * cartItem.quantity;
        this.setState({
            cart: this.state.cart
        });
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
        this.cartTotals();
    }

    removeCartProduct = (id) => {
        let cartItem = this.getCartItem(id);
        let cartItems = this.state.cart;
        let index = cartItems.indexOf(cartItem);
        cartItems.splice(index, 1);
        this.setState({
            cart: cartItems
        })
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    clearCart = () => {
        this.setState({
            cart: []
        })
        localStorage.removeItem('cart');
    }

    cartTotals = () => {

        let cartItems = this.state.cart;
        if (cartItems.length < 1) return;


        let subTotal = cartItems.reduce((total, curval) => {
            return total.total + curval.total;
        })
        if (cartItems.length === 1) {
            subTotal = cartItems[0].total;
        }
        let tax = subTotal * 0.10;
        let total = subTotal + tax;
        this.setState({
            cartSubTotal: subTotal.toFixed(2),
            cartTax: tax.toFixed(2),
            cartTotal: total.toFixed(2),

        })
    }

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    addToCart: this.addToCart,
                    getCartItem: this.getCartItem,
                    getProduct: this.getProduct,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    cartQuantityIncrement: this.cartQuantityIncrement,
                    cartQuantityDecrement: this.cartQuantityDecrement,
                    removeCartProduct: this.removeCartProduct,
                    clearCart: this.clearCart,
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer, ProductContext};