import { Container } from './Container.jsx'
import { Navbar } from './Navbar.jsx'

import './../styles/Header.css'

export const Header = ({categories, cartItems, setCartItems, removeCartItem }) => {
    const isAuthenticated = false

    return (
        <header className='header'>
            <Container>
            <Navbar 
                categories={categories}
                cartItems={cartItems}
                setCartItems={setCartItems}
                removeCartItem={removeCartItem}
                isAuthenticated={isAuthenticated}
            />
            </Container>
        </header>
    )
}