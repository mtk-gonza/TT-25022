import React from 'react'

import './../styles/ProductCard.css'

export const ProductCard = ({product, addToCart}) => {
    return (
        <div className='product-card'>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button className='btn_add-item' onClick={() => addToCart(product)}>Agregar al Carrito</button>
        </div>
    )
}