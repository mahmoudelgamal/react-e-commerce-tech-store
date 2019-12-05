import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default function Cart({history}) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="your cart items" center={true} />
      </div>
      <div className="container-fluid">
        <CartColumns />
        <CartList />
        <CartTotals history={history} />
      </div>
    </section>
  );
}
