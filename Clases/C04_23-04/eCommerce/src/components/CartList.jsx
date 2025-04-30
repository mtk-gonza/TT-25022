import React from 'react'
import { CartCard } from './CartCard.jsx'

import './../styles/CartList.css'

export const CartList = ({ cartItems, clearCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <div className='cart-list_container'>
            <h2>Carrito de Compras</h2>
            {
                cartItems.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) :
                (<>
                    <ul className='cart-list'>
                        {cartItems.map((item) => (
                            <li key={item.id} className='cart-item'>
                                <CartCard item={item}/>
                            </li>
                        ))}
                    </ul>
                    <div className='cart-total'>
                        <strong>Total: ${totalPrice.toFixed(2)}</strong>
                        <button onClick={clearCart}>Vaciar Carrito</button>
                    </div>
                </>)
            }
        </div>
    )
}