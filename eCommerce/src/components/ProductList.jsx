import React from 'react'
import { ProductCard } from './ProductCard.jsx'

import './../styles/ProductList.css'

export const ProductList = ({ products }) => {

    return (
        <ul className='products-list'>
            {
                products.map(product => (
                    <li key={product.id} className='product-list__item'>
                        <ProductCard product={product} />
                    </li>
                ))
            }
        </ul>
    )
}