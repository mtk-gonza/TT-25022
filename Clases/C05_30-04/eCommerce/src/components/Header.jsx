import { Cart } from './Cart.jsx'

import './../styles/Header.css'

export const Header = ({ cartItems, setCartItems, removeCartItem }) => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='navbar'>
                    <div className='container__navbar'>
                        <div className='logo__navbar'>
                            <img src='/eCommerce.png' alt='logo de Talento Tech' />
                        </div>
                        <div className='title__navbar'>
                            <h2>eCommerce</h2>
                        </div>
                        <div className='cart__navbar'>
                            <Cart cartItems={cartItems} setCartItems={setCartItems} removeCartItem={removeCartItem} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}