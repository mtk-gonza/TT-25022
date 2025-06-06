import React, { useState } from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './Icon.jsx'
import { CartCard } from './CartCard.jsx'

import { useCart } from './../../hooks/useCart.jsx'

import './../../styles/components/common/Cart.css'

export const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart()
    const [isOpen, setIsOpen] = useState(false)
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    const handlerCloseOnMouseLeave = () => {
        setIsOpen(false)
    }
    const handlerClearCart = () => {
        clearCart()
        setIsOpen(false)
    }
    return (
        <div className='cart'>
            <button className='cart__icon' onClick={() => setIsOpen(!isOpen)}>
                <Icon css='icon' icon={faCartShopping} />
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
                            <ul className='cart__list'>
                                {cartItems.map((item) => (
                                    <li key={item.id} className='cart__list-item'>
                                        <CartCard item={item} removeFromCart={removeFromCart} />
                                    </li>
                                ))}
                            </ul>                            
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