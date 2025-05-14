import React from 'react'
import { CartCard } from './CartCard.jsx'

import './../styles/CartList.css'

export const CartList = ({ cartItems, removeFromCart }) => {
    return (
        <ul className='cart-list'>
            {cartItems.map((item) => (
                <li key={item.id} className='cart-list__item'>
                    <CartCard item={item} removeFromCart={removeFromCart} />
                </li>
            ))}
        </ul>
    )
}