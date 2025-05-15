import React from 'react'
import { ProductCard } from './ProductCard.jsx'

import './../styles/ProductList.css'

export const ProductList = ({ products }) => {

    return (
        <>
            <h2>Productos Disponibles</h2>
            <ul className='products-list'>
                {
                    products.map(product => (
                        <li key={product.id} className='product-item'>
                            <ProductCard product={product} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}