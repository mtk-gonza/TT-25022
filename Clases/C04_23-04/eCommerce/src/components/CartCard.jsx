import React from 'react'

import './../styles/CartCard.css'

export const CartCard = ({item, removeCartItem}) => {
    return (
        <div className='cart-card'>
            <span>{item.name}</span>
            <span>-</span>
            <span>${item.price}</span>
            <span>-</span>
            <span>x {item.quantity}</span>
            <button className='btn-remove-item' onClick={() => removeCartItem(item)} aria-label='Eliminar este producto del carrito'>
                🗑️
            </button>
        </div>
    )
}