import React from 'react';

const EmptyCart = () => {
    return (
        <div className="container">
            <h1 className="text-title text-center my-5">Your cart is empty</h1>
            <div className="text-center">
                <img src="img/emptycart.png" alt="emptycart"/>
            </div>
        </div>
    );
};

export default EmptyCart;