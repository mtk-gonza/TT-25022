import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './../common/Container.jsx'
import { Navbar } from './../common/Navbar.jsx'

import logo from '/images/branding/logo_light_horizontal.svg'
import './../../styles/components/layouts/Header.css'

export const Header = () => {

    return (
        <header className='header'>
            <Container>
                <div className='header__top'>
                    <picture className='header__logo'>
                        <Link to='/'>
                            <img src={logo} alt='FunkoShop Logotipo' />
                        </Link>
                    </picture>
                    <Navbar />
                </div>
            </Container>
        </header>
    )
}