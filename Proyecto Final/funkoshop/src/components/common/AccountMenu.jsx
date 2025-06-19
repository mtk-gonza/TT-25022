import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { faUserCircle, faSignOut, faChevronUp, faChevronDown, faSignIn } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './Icon.jsx'
import { useAuth } from '../../hooks/useAuth.jsx'

import './../../styles/components/common/AccountMenu.css'

export const AccountMenu = () => {
    const { logout, authUser, isAuthenticated } = useAuth()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)

    const navidate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const handleLogout = () => {
        logout()
        closeMenu()
        navidate('/login')
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu()
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <div className='account-menu' ref={menuRef} onClick={toggleMenu}>
            {!isAuthenticated ?
                <Link className='account-menu__link' to='/login'>
                    <Icon icon={faSignIn} className='account-menu__sign-in' />
                </Link>
                :
                <>
                    <div className='account-menu__icons' >
                        <Icon css='ico_user' icon={faUserCircle} />
                        <Icon css='icon' icon={!isMenuOpen ? faChevronDown : faChevronUp} />
                    </div>
                    {isMenuOpen && (
                        <ul className='dropdown-menu'>
                            <li className='dropdown-menu__link'>{authUser.name} {authUser.lastName}</li>
                            <li className='dropdown-menu__link'>
                                <Link to='/favorites'>
                                    Mis Favoritos
                                </Link>
                            </li>
                            {authUser.role_id == 1 &&
                                <li className='dropdown-menu__link'>
                                    <Link to='/dashboard'>
                                        Dashboard
                                    </Link>
                                </li>
                            }
                            <li className='dropdown-menu__link' onClick={handleLogout}>
                                <Icon icon={faSignOut} className='sign-in-icon' />
                                <span>Cerrar sesión</span>
                            </li>
                        </ul>
                    )}
                </>
            }
        </div>
    )
}