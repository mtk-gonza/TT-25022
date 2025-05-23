import React, { useContext } from 'react'
import { Container } from './../components/Container.jsx'
import { Loading } from './../components/Loading.jsx'
import { ProductList } from './../components/ProductList.jsx'

import { ProductsContext } from './../context/ProductsContext.jsx'

import './../styles/products.css'

export const Products = () => {
    const { products, isLoading } = useContext(ProductsContext)
    return (
        <div className='products'>
            <Container>
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <ProductList products={products}/>
                    )
                }
            </Container>
        </div>
    )
}