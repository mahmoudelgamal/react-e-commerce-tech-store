import React from "react";
import { items } from "../../context/productData";


export default function CartColumns() {
  const columnsHeader = [
    {id:0, name: 'PRODUCTS'},
    {id:1, name: 'NAME OF PRODUCT'},
    {id:2, name: 'PRICE'},
    {id:3, name: 'QUANTITY'},
    {id:4, name: 'REMOVE'},
    {id:5, name: 'TOTAL'},
  ]

  return <div className="py-5 text-center d-none d-lg-block">
    <div className="row">
      {columnsHeader.map(item => (
        <div className="col-2" key={item.id}>
          <p className="text-uppercase">{item.name}</p>
        </div>
      ))}
    </div>
  </div>;
}
