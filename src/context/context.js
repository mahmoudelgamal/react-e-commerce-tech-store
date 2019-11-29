import React, { Component } from 'react';
import { LinksData } from './linksData';

const ProductContext = React.createContext();
// provider
// consumer
class ProductProvider extends Component {
    state = { 
        sidebarOpen: false,
        cartOpen: true,
        cartItems: 0,
        links: LinksData,
        cart: [],
    }
    // hande Sidebar
    handleSidebar = () => {
        this.setState({sidebarOpen:!this.state.sidebarOpen})
    }
    // hande Cart
    handleCart = () => {
        this.setState({cartOpen:!this.state.cartOpen})
    }
    // close cart
    closeCart = () => {
        this.setState({cartOpen:false})
    }
    // open cart
    openCart = () => {
        this.setState({cartOpen:true})
    }
    render() { 
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleCart: this.handleCart,
                handleSidebar: this.handleSidebar,
                closeCart: this.closeCart,
                openCart: this.openCart
            }}>
            {this.props.children}
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer
export {ProductProvider, ProductConsumer} ;