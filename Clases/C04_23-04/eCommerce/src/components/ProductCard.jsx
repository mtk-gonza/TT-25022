import React from 'react'

import './../styles/ProductCard.css'

export const ProductCard = ({product, addToCart}) => {
    return (
        <div className='product-card'>
            <strong>{product.name}</strong>
            <p>${product.price}</p>
            <button className='btn_add-item' onClick={() => addToCart(product)}>Agregar al Carrito</button>
        </div>
    )
}