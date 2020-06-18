import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../../database/logo.svg';
import './Navbar.css';
import '../style/Button.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link to="/">
                        <img src={logo} className="navbar-brand" alt="store"/>
                    </Link>
                    <ul className="navbar-nav mr-auto  align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">Products</Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <button className="main-btn">
                            <i className="fas fa-cart-plus"></i>
                            <span className="ml-2">My Cart</span>
                        </button>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;