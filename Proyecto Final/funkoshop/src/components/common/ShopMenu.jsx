import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {  faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { Icon } from './Icon.jsx'

import { useCategories } from './../../hooks/useCategories.jsx'

import './../../styles/components/common/ShopMenu.css'

export const ShopMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)

    const { categories } = useCategories()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
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
        <div className='shop-menu' ref={menuRef} onClick={toggleMenu}>
            <div className='account-menu__icons' >
                <p className='navbar__link with-icon'>SHOP<Icon css='icon' icon={!isMenuOpen ? faChevronDown : faChevronUp} /></p>
                {isMenuOpen &&(
                    <ul className='shop-menu__dropdown-menu'>
                        {categories.map((category) => (
                            <li className='dropdown-menu__link' key={category.id}>
                                <Link to={`/shop/${category.name}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}