import React from 'react';
import Title from '../Title';
import { ProductConcumer, ProductConsumer } from '../../context'
import Product from '../Product'

export default function Products() {
    return (
        <ProductConsumer>
            {value => {
                const { filteredProducts } = value;
                return (
                    <section className="py-5">
                        <div className="container">
                            <Title title="our products" center="true"/>
                            <div className="row pt-5">
                                {filteredProducts.map((product) => <Product key={product.id} product={product} />)}
                            </div>
                        </div>
                    </section>
                    )
                }}
        </ProductConsumer>
    )
} 