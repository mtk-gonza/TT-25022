import React from 'react'

import './../../styles/components/layouts/CartItem.css'

export const CartItem = ({item, removeFromCart}) => {
    return (
        <div className='cart-item'>
            <span className='cart-item__name'>{item.name}</span>
            <span>-</span>
            <span className='cart-item__price'>${item.price}</span>
            <span>-</span>
            <span className='cart-item__quantity'>x {item.quantity}</span>
            <button className='btn-remove-item' onClick={() => removeFromCart(item)} aria-label='Eliminar este producto del carrito'>
                🗑️
            </button>
        </div>
    )
}