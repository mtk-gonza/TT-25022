import React, { useContext } from 'react'

import { Main } from './../components/Main.jsx'
import { Container } from './../components/Container.jsx'
import { Loading } from './../components/Loading.jsx'
import { ProductList } from './../components/ProductList.jsx'

import { ProductsContext } from './../context/ProductsContext.jsx'

import './../styles/products.css'

export const Products = () => {
    const { products, isLoading } = useContext(ProductsContext)
    return (
        <Main className='products'>
            <Container>
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <ProductList products={products}/>
                    )
                }
            </Container>
        </Main>
    )
}