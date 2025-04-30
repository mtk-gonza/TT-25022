import React from 'react'

import './../styles/Cart.css'

export const Cart = ({ cartItems, clearCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <div className='cart'>
            <h2>Carrito de Compras</h2>
            {
                cartItems.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) :
                (<>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className='cart-item'>
                                <div>
                                    <strong>{item.name}</strong> - ${item.price} x {item.quantity}
                                </div>
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