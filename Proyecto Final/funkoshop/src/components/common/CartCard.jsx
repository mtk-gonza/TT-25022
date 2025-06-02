import React from 'react'

import './../../styles/components/common/CartCard.css'

export const CartCard = ({item, removeFromCart}) => {
    return (
        <div className='cart-card'>
            <span className='cart-card__name'>{item.name}</span>
            <span>-</span>
            <span className='cart-card__price'>${item.price}</span>
            <span>-</span>
            <span className='cart-card__quantity'>x {item.quantity}</span>
            <button className='btn-remove-item' onClick={() => removeFromCart(item)} aria-label='Eliminar este producto del carrito'>
                🗑️
            </button>
        </div>
    )
}