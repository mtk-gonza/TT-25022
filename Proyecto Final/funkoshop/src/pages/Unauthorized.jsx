import React from 'react'
import { Link } from 'react-router-dom'

import { Main } from './../components/common/Main.jsx'
import { Container } from '../components/common/Container.jsx'

import './../styles/pages/Unauthorized.css'

export const Unauthorized = () => {
    return (
        <Main className='unauthorized'>
            <Container>
                <h2>Acceso Denegado</h2>
                <p>No tienes permiso para acceder a esta página.</p>
                <Link to='/dashboard'>Volver al inicio</Link>
            </Container>
        </Main>
    )
}