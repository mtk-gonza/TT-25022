import React from 'react'

import './../styles/CartCard.css'

export const CartCard = ({item, removeCartItem}) => {
    return (
        <div className='cart-card'>
            <span className='item_name'>{item.name}</span>
            <span>-</span>
            <span className='item_price'>${item.price}</span>
            <span>-</span>
            <span className='item_quantity'>x {item.quantity}</span>
            <button className='btn-remove-item' onClick={() => removeCartItem(item)} aria-label='Eliminar este producto del carrito'>
                🗑️
            </button>
        </div>
    )
}