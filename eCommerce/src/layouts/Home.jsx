import React from 'react'
import { Link } from 'react-router-dom'

import { Shop } from './../components/Shop.jsx'
import { Container } from './../components/Container.jsx'
import { ProductList } from './../components/ProductList.jsx'

import { useProducts } from './../hooks/useProducts.jsx'

import './../styles/Home.css'

export const Home = () => {
    const { products } = useProducts()
    return (
        <div className='home'>
                <Shop products={products}/>      
        </div>
    )
}