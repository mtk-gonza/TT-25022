import React from 'react'

import './../styles/CartCard.css'

export const CartCard = ({item}) => {
    return (
        <div className='cart-card'>
            <strong>{item.name}</strong> - ${item.price} x {item.quantity}
        </div>
    )
}