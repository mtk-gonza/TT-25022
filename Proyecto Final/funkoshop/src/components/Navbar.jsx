import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { faBars, faChevronDown, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Icon } from './Icon.jsx'
import { Cart } from './Cart.jsx'
import { AccountMenu } from './AccountMenu.jsx'

import { useProducts } from './../hooks/useProducts.jsx'
import { useAuth } from './../hooks/useAuth.jsx'

import logo from '/images/branding/logo_light_horizontal.svg'
import './../styles/Navbar.css'

export const Navbar = () => {
    const { categories } = useProducts()
    const { isAuthenticated, logout, user } = useAuth()

    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLoguot = () => {
        logout()
        navigate('/login')
    }

    return (
        <nav className='navbar'>
            <picture className='navbar__logo'>
                <Link to='/'>
                    <img src={logo} alt='FunkoShop Logotipo' />
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
                            <Link className='navbar__link' to='/register'>REGISTER</Link>
                        </li>
                        <li className='navbar__item'>
                            <Link className='navbar__link' to='/login'>
                                <FontAwesomeIcon icon={faRightToBracket} className='sign-in-icon' />
                            </Link>
                        </li>
                    </>
                    :
                    <>
                        {user?.role.name == 'admin' ?
                            <li className='navbar__item'>
                                <Link className='navbar__link' to='/dashboard'>DASHBOARD</Link>
                            </li>
                            :
                            <>
                                <li className='navbar__item'>
                                    <Link className='navbar__link' to='/favorites'>MIS FAVORITOS</Link>
                                </li>
                                <li className='navbar__item'>
                                    <Link className='navbar__link' to='/purchases'>MIS COMPRAS</Link>
                                </li>
                            </>
                        }
                        <li className='navbar__item'>
                            <AccountMenu />
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