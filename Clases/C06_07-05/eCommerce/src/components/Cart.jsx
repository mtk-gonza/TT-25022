import React, { useState } from 'react'
import { CartList } from './CartList.jsx'

import './../styles/Cart.css'

export const Cart = ({ cartItems, setCartItems, removeCartItem }) => {
    const [isOpen, setIsOpen] = useState(false)
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    const handlerCloseOnMouseLeave = () => {
        setIsOpen(false)
    }
    const handlerClearCart = () => {
        setCartItems([])
        setIsOpen(false)
    }
    return (
        <div className='cart'>
            <button className='cart__icon' onClick={() => setIsOpen(!isOpen)}>
                🛒
                {totalQuantity > 0 && (
                    <span className='cart__badge'>{totalQuantity}</span>
                )}
            </button>
            {isOpen && (
                <div className='cart__content'
                    onMouseLeave={handlerCloseOnMouseLeave}
                >
                    <h3>Carrito de Compras</h3>
                    {cartItems.length === 0 ? (
                        <p>No hay productos.</p>
                    ) : (
                        <>
                            <CartList cartItems={cartItems} removeCartItem={removeCartItem}/>
                            <div className='cart__total'>
                                <span>Cantidad: {totalQuantity} producto(s)</span>
                                <strong>Precio Total: ${totalPrice.toFixed(2)}</strong>
                                <button onClick={handlerClearCart}>Vaciar Carrito</button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}