import React, { useState } from 'react'

import './../styles/ProductCard.css'

export const ProductCard = ({product, addToCart}) => {
    const [quantity, setQuantity] = useState(1)

    const increase = () => {
        setQuantity(prev => (prev != product.stock ? prev + 1 : prev))
    }

    const decrease = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    }

    return (
        <div className='product-card'>
            <strong>{product.name}</strong>
            <img src={product.image_front} alt={product.name} className='img_product' />
            <span>${product.price}</span>
            <span>Stock: {product.stock}</span>
            <div className='actions_card'>
                <button className='btn_decrease' onClick={decrease}>
                    -
                </button>
                <span className='quantity'>{quantity}</span>
                <button className='btn_increase' onClick={increase}>
                    +
                </button>
            </div>
            <button className='btn_add-item' onClick={() => addToCart({...product, quantity: quantity})}>Agregar al Carrito</button>
        </div>
    )
}