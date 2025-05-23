import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import { Container } from './Container.jsx'
import { Cart } from './Cart.jsx'
import { AccountMenu } from './AccountMenu.jsx'

import { useAuth } from './../hooks/useAuth.jsx'

import logo from './../assets/eCommerce.png'
import './../styles/Navbar.css'

export const Navbar = () => {

    const { isAuthenticated } = useAuth()

    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <Link to='/'>
                    <img src={logo} alt='logo de Ecommerce' />
                </Link>
            </div>
            <div className='navbar__tittle'>
                <h2>eCommerce</h2>
            </div>
            <div className='navbar__actions'>
                <div className='navbar__cart'>
                    <Cart />
                </div>
                <div className='navbar__auth'>
                    {!isAuthenticated ? (
                        <div className='sign-in'>
                            <Link to='/login'>
                                <FontAwesomeIcon icon={faRightToBracket} className='sign-in-icon' />
                            </Link>
                        </div>
                    ) : (
                        <AccountMenu />
                    )}
                </div>
            </div>
        </div>
    )
}