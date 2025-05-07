import React from 'react'
import { ProductCard } from './ProductCard.jsx'

import './../styles/ProductList.css'

export const ProductList = ({products, addToCart}) => {

    return (
        <div className='products'>
            <div className='container'>
                <h2>Productos Disponibles</h2>
                <ul className='products-list'>
                    {
                        products.map(product => (
                            <li key={product.id} className='product-item'>
                                <ProductCard product={product} addToCart={addToCart}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}