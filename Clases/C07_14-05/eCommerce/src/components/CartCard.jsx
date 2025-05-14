import React from 'react'

import './../styles/CartCard.css'

export const CartCard = ({item, removeFromCart}) => {
    return (
        <div className='cart-card'>
            <span className='cart-card__item-name'>{item.name}</span>
            <span>-</span>
            <span className='cart-card__item-price'>${item.price}</span>
            <span>-</span>
            <span className='cart-card__item-quantity'>x {item.quantity}</span>
            <button className='btn-remove-item' onClick={() => removeFromCart(item)} aria-label='Eliminar este producto del carrito'>
                🗑️
            </button>
        </div>
    )
}