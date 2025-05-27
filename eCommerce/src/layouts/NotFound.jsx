import React from 'react'

import { Main } from './../components/Main.jsx'
import { Container } from './../components/Container.jsx'

import './../styles/NotFound.css'

export const NotFound = () => {
    return (
        <Main className='not-found'>
            <Container>
                <p>Not found</p>
            </Container>
        </Main>
    )
}