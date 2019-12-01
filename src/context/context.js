import React, { Component } from 'react';
import { LinksData } from './linksData';
import { socialData } from './socialData';
import { items } from './productData';

const ProductContext = React.createContext();
// provider
// consumer
class ProductProvider extends Component {
    state = { 
        sidebarOpen: false,
        cartOpen: false,
        links: LinksData,
        cart: [],
        socialIcons: socialData,
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        carTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: false
    }

    componentDidMount() {
        //from contentful items
    
        this.setProducts(items);
    }

    setProducts = () => {
        let storeProducts = items.map(item => {
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            let product = { id, ...item.fields, image };
            return product;
        })
        let featuredProducts = storeProducts.filter(product => product.featured === true)
        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false
        })
    }

    // get cart from local storage
    getStorageCart = () => {
        return [];
    };
    // get product from local storage
    getStorageProduct = () => {
        return {};
    };
    // get totals
    getTotals = () => {};
    //add totals
    addTotals = () => {};
    // sync storage
    syncStorage = () => {};
    //add to cart
    addToCart = id => {
        console.log(`add to cart ${id}`);
    };
    // set single product
    setSingleProduct = id => {
        console.log(`set single product ${id}`);
    };


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
                openCart: this.openCart,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct
            }}>
            {this.props.children}
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer
export {ProductProvider, ProductConsumer} ;