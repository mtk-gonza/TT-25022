import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from './../hooks/useAuth.jsx'

import './../styles/AccountMenu.css'

export const AccountMenu = () => {
    const { logout, user } = useAuth()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)

    const navidate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const closeMenu = () => {
        setIsMenuOpen(false)
    };

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
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <div className='account-menu' ref={menuRef}>
            <FontAwesomeIcon
                icon={faUserCircle}
                className='ico_user'
                onClick={toggleMenu}
            />
            {isMenuOpen && (
                <ul className='dropdown-menu'>
                    <li>{user.name} {user.lastName}</li>
                    <li>
                        <Link to='/favorites'>
                            Mis Favoritos
                        </Link>
                    </li>
                    {user.rol_id == 1 && 
                        <li>
                            <Link to='/dashboard'>
                                Dashboard
                            </Link>
                        </li>
                    }
                    <li onClick={handleLogout}>Cerrar sesión</li>                    
                </ul>
            )}
        </div>
    )
}