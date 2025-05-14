import { Navbar } from './Navbar.jsx'
import { Container } from './Container.jsx'
import { Cart } from './Cart.jsx'

import './../styles/Header.css'

export const Header = ({ cartItems, clearCart, removeFromCart }) => {
    return (
        <div className='header'>
            <Navbar cartItems={cartItems} clearCart={clearCart} removeFromCart={removeFromCart}/>
        </div>
    )
}