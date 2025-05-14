import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Container.jsx'
import { Cart } from './Cart.jsx'

import logo from './../assets/eCommerce.png'
import './../styles/Navbar.css'

export const Navbar = ({ cartItems, clearCart, removeFromCart }) => {
    return (
        <Container>
            <div className='navbar'>
                <div className='navbar__logo'>
                    <Link to='/'><img src={logo} alt='logo de Ecommerce' /></Link>                    
                </div>
                <div className='navbar__tittle'>
                    <h2>eCommerce</h2>
                </div>
                <div className='navbar__cart'>
                    <Cart cartItems={cartItems} clearCart={clearCart} removeFromCart={removeFromCart} />
                </div>
            </div>
        </Container>
    )
}