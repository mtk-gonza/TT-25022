import { Navbar } from './Navbar.jsx'
import { Container } from './Container.jsx'
import { Cart } from './Cart.jsx'

import './../styles/Header.css'

export const Header = () => {
    return (
        <div className='header'>
            <Navbar/>
        </div>
    )
}