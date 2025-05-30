import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from '../common/Container.jsx'
import { AccountMenu } from './AccountMenu.jsx'
import { Navbar } from './Navbar.jsx'

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
                    <AccountMenu />
                </div>
                <div className='header__bottom'>
                    <Navbar />
                </div>
            </Container>
        </header>
    )
}