import React from "react";
import { ProductConsumer } from '../../context';

export default function CartTotals() {
  return <ProductConsumer>
    {value => {
      const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
      return <div className="container">
      <div className="col text-title text-center my-4">
        <button className="btn btn-outline-danger my-3" onClick= {clearCart}>clear cart</button>
        
          <h3>subTotal : ${cartSubTotal}</h3>
          <h3>tax : ${cartTax}</h3>
          <h3>total : ${cartTotal}</h3> 
          
      </div>
    </div>;
    }}
  </ProductConsumer>
}
