import React, { useState } from 'react'
import { faCartShopping, faChevronUp, faChevronDown  } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './Icon.jsx'
import { CartCard } from './CartCard.jsx'

import { useCart } from './../../hooks/useCart.jsx'

import './../../styles/components/common/Cart.css'

export const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    const handlerCloseOnMouseLeave = () => {
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handlerClearCart = () => {
        clearCart()
        setIsMenuOpen(false)
    }
    
    return (
        <div className='dropdown-menu'>
            <div className='dropdown-menu__icons' onClick={toggleMenu}>
                <div className='navbar__link with-icon'>
                    <div>
                        <Icon css='icon' icon={faCartShopping} />
                        {totalQuantity > 0 && (
                            <span className='cart__badge'>{totalQuantity}</span>
                        )}
                    </div>
                    <Icon css='icon' icon={!isMenuOpen ? faChevronDown : faChevronUp} />
                </div>
            </div>
            {isMenuOpen && (
                <div className='cart__content' onMouseLeave={handlerCloseOnMouseLeave}>
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