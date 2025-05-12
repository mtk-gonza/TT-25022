import React from 'react'

import './../styles/CartItem.css'

export const CartItem = ({item, removeCartItem}) => {
    return (
        <div className='cart-item'>
            <span className='cart-item__name'>{item.name}</span>
            <span>-</span>
            <span className='cart-item__price'>${item.price}</span>
            <span>-</span>
            <span className='cart-item__quantity'>x {item.quantity}</span>
            <button className='btn-remove-item' onClick={() => removeCartItem(item)} aria-label='Eliminar este producto del carrito'>
                🗑️
            </button>
        </div>
    )
}