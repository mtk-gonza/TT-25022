import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './Icon.jsx'
import { Cart } from './Cart.jsx'
import { AccountMenu } from './AccountMenu.jsx'

import { useCategories } from './../../hooks/useCategories.jsx'
import { useAuth } from '../../hooks/useAuth.jsx'

import './../../styles/components/common/Navbar.css'

export const Navbar = () => {
    const { categories } = useCategories()
    const { isAuthenticated, authUser } = useAuth()

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='navbar'>
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
                        <li className='navbar__item'>
                            <Link className='navbar__link' to='/register'>REGISTER</Link>
                        </li>
                    :
                    <>
                        <li className='navbar__item'>
                            <Link className='navbar__link' to='/favorites'>MIS FAVORITOS</Link>
                        </li>
                        {authUser?.role.name == 'admin' &&
                            <li className='navbar__item'>
                                <Link className='navbar__link' to='/dashboard'>DASHBOARD</Link>
                            </li>
                        }
                    </>
                }
                <li className='navbar__item'>
                    <Cart />
                </li>
                <li className='navbar__item'>
                    <AccountMenu />
                </li>
            </ul>
        </nav>
    )
}