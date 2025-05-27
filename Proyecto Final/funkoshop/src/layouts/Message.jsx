import React from 'react'

import { Main } from './../components/Main.jsx'
import { Container } from './../components/Container.jsx'

import './../styles/Message.css'

export const Message = ({message}) => {
    return (
        <Main>
            <Container>
                <div className='message'>{message}</div>
            </Container>
        </Main>
    )
}