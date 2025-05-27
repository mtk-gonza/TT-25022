import React from 'react'
import { Link } from 'react-router-dom'

import { Main } from './../components/Main.jsx'
import { Container } from './../components/Container.jsx'

import './../styles/Admin.css'

export const Admin = () => {
    return (
        <Main className='admin'>      
            <Container>
                <div className='admin__content'>
                    <h2>Tabla Admin</h2>
                    <Link className='edit__back' to='/'>Volver</Link>
                </div>
            </Container>      
        </Main>
    )
}