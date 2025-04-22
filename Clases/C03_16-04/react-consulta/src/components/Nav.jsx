import React from 'react'
import logo from './../assets/react.svg'
import './styles/Nav.css'

export const Nav = () => {
    return (
        <nav style={{backgroundColor: '#333', color: 'white', padding: '10px'}}>
            <ul>
                <img src={logo} alt="" />
                <li><a href='#'>Inicio</a></li>
                <li>Acerca de</li>
                <li>Contacto</li>
            </ul>
        </nav>
    )
}