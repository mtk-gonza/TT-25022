import React from 'react'
import { CartCard } from './CartCard.jsx'

import './../styles/CartList.css'

export const CartList = ({ cartItems, removeCartItem }) => {
    return (
        <ul className='cart-list'>
            {cartItems.map((item) => (
                <li key={item.id} className='cart-item'>
                    <CartCard item={item} removeCartItem={removeCartItem} />
                </li>
            ))}
        </ul>
    )
}