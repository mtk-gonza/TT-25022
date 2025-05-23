import React from 'react'
import { CartItem } from './CartItem.jsx'

import './../styles/CartList.css'

export const CartList = ({ cartItems, removeFromCart }) => {
    return (
        <ul className='cart-list'>
            {cartItems.map((item) => (
                <li key={item.id} className='cart-list__item'>
                    <CartItem item={item} removeFromCart={removeFromCart} />
                </li>
            ))}
        </ul>
    )
}