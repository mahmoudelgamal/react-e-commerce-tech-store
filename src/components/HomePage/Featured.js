import React from "react";
import Product from '../Product';
import Title from '../Title';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context'
import styled from 'styled-components'

export default function Featured() {
  return <ProductConsumer>
    {value => {
      const { featuredProducts } = value;
      return <section className="py-5">
      <div className="container">
        {/* title */}
        <Title title="featured products" center="true" />
        {/* products */}
        <div className="row">
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;

              return featuredProducts.map(product => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">
              our products
            </Link>
          </div>
        </div>
      </div>
    </section>
    }}
  </ProductConsumer>
}

const FeaturedWrapper = styled.section`
  
`
