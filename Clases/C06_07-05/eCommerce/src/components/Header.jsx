import { Navbar } from './Navbar.jsx'
import { Container } from './Container.jsx'
import { Cart } from './Cart.jsx'

import './../styles/Header.css'

export const Header = ({ cartItems, setCartItems, removeCartItem }) => {
    return (
        <div className='header'>
            <Navbar cartItems={cartItems} setCartItems={setCartItems} removeCartItem={removeCartItem}/>
        </div>
    )
}