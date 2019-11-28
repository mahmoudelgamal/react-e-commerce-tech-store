import React, { Component } from 'react';

const ProductContext = React.createContext();
// provider
// consumer
class ProductProvider extends Component {
    state = { 
        sidebarOpen: false,
        sideCartOpen: false,
    }
    // hande Sidebar
    handleSidebar = () => {
        this.setState({sidebarOpen:!this.state.sidebarOpen})
    }
    // hande Cart
    handleCart = () => {
        this.setState({sideCartOpen:!this.state.sideCartOpen})
    }
    // close cart
    closeCart = () => {
        this.setState({sideCartOpen:false})
    }
    // open cart
    openCart = () => {
        this.setState({sideCartOpen:true})
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