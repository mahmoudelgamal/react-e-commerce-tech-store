import React, { Component } from 'react';
import styled  from 'styled-components';
import { ProductConsumer } from '../context';

class Sidebar extends Component {
    render() { 
        return <ProductConsumer>
            {value => {
                const { cartOpen, handleCart, closeCart, cart } = value
                return <CartWrapper show={cartOpen} onClick={closeCart}>
                    <p>Cart Items</p>
                </CartWrapper>
            }}
        </ProductConsumer>
    }
}
 
export default Sidebar;

const CartWrapper = styled.nav`
    position: fixed;
    top:61px;
    right:0;
    background-color: var(--mainGrey);
    width:100%;
    height:100%;
    transition: var(--mainTransition);
    border-left: 5px solid var(--primaryColor);
    transform:${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
    @media (min-width: 576px) {
        width:20rem
    }
`