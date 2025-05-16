import React, { useState } from 'react'
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Icon } from './Icon.jsx'
import { Cart } from './Cart.jsx'

import { useProducts } from './../hooks/useProducts.jsx'
import { useAuth } from './../hooks/useAuth.jsx'

import './../styles/Navbar.css'

export const Navbar = () => {
    const { categories } = useProducts()
    const { isAuthenticated, logout } = useAuth()

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='navbar'>
            <picture className='navbar__logo'>
                <Link to='/'>
                    <img src='/images/branding/logo_light_horizontal.svg' alt='FunkoShop Logotipo' />
                </Link>
            </picture>
            <div className='navbar-toggle' id='navbarToggle' onClick={() => toggleMenu()}>
                <Icon css='icon' icon={faBars} />
            </div>
            <ul className={isOpen ? 'navbar__menu active' : 'navbar__menu'}>
                <li className='navbar__item with-submenu'>
                    <Link className='navbar__link with-icon'>SHOP<Icon css='icon' icon={faChevronDown} /></Link>
                    <ul className='submenu'>
                        {categories.map((category) => (
                            <li className='submenu__item' key={category.id}>
                                <Link className='submenu__link' to={`/shop/${category.name}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className='navbar__item'>
                    <Link className='navbar__link' to='/contact'>CONTACTO</Link>
                </li>
                {!isAuthenticated ?
                    <>
                        <li className='navbar__item'>
                            <Link className='navbar__link' to='/login'>LOGIN</Link>
                        </li>
                        <li className='navbar__item'>
                            <Link className='navbar__link' to='/register'>REGISTER</Link>
                        </li>
                    </>
                    :
                    <>
                        <li className='navbar__item'>
                            <Link className='navbar__link' to='/dashboard'>DASHBOARD</Link>
                        </li>
                        <li className='navbar__item'>
                            <button className='btn_cerrar navbar__link' onClick={logout}>CERRAR SESIÓN</button>
                        </li>
                    </>
                }
                <li className='navbar__item'>
                    <Cart />
                </li>
            </ul>
        </nav>
    )
}