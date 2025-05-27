import React from 'react'
import { Link } from 'react-router-dom'

import { Main } from './../components/Main.jsx'
import { Container } from './../components/Container.jsx'

import './../styles/NotFound.css'

export const NotFound = () => {
    return (
        <Main className='not-found'>
            <Container>
                <p>Pagina no encontrada</p>
                <Link className='collection__link' to={'/'}>HOME</Link>
            </Container>
        </Main>
    )
}