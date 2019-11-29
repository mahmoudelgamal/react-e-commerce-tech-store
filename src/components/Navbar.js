import React, { Component } from 'react';
import { FaBars, FaCartPlus } from "react-icons/fa";
import {  ProductConsumer } from "../context";
import styled from 'styled-components';
import logo from '../images/logo.svg'


class Navber extends Component {
    render() { 
        return (
            <ProductConsumer>
                {value => {
                    const { handleSidebar, handleCart, cartItems } = value;
                    return (
                        <NavbarWraper>
                            <div className="nav-center">
                                <FaBars className="nav-icon" onClick={handleSidebar} />
                                <img src={logo} alt="logo" />
                                <div className="nav-cart">
                                    <FaCartPlus onClick={handleCart}className="nav-icon" />
                                    <div className="cart-items">
                                        {cartItems} 
                                    </div>
                                </div>
                            </div>
                        </NavbarWraper>
                    )
                }}
            </ProductConsumer>
            );
    }
}
 
export default Navber;

const NavbarWraper = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--mainGrey);
    border-bottom: 3px solid var(--primaryColor);
    .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
    }
    .nav-icon {
        font-size: 1.5rem;
        cursor: pointer;
    }
    .nav-cart {
        position: relative;
    }
    .cart-items {
        background: var(--primaryColor);
        color: var(--mainWhite);
        font-size: 0.85rem;
        position: absolute;
        top: -8px;
        right: -8px;
        padding: 0 5px;
        border-radius: 50%;
    }

`