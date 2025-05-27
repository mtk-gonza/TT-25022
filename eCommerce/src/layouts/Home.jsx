import React from 'react'

import { Main } from './../components/Main.jsx'
import { Shop } from './../components/Shop.jsx'

import { useProducts } from './../hooks/useProducts.jsx'

import './../styles/Home.css'

export const Home = () => {
    const { products } = useProducts()
    return (
        <Main className='home'>
            <Shop products={products}/>      
        </Main>
    )
}