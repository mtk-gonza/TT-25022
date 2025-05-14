import React from 'react'
import { Container } from './../components/Container.jsx'
import { Loading } from './../components/Loading.jsx'
import { ProductList } from './../components/ProductList.jsx'

import './../styles/products.css'

export const Products = ({ products, isLoading, addToCart }) => {
    return (
        <div className='products'>
            <Container>
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <ProductList products={products} addToCart={addToCart} />
                    )
                }
            </Container>
        </div>
    )
}