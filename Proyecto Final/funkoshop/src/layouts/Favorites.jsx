import React from 'react'
import { Container } from './../components/Container.jsx'
import { Card } from './../components/Card.jsx'

import './../styles/Favorites.css'

export const Favorites = () => {
    return (
        <div className='favorites'>
            <Container>
                <h2>Mis Favoritos</h2>
            </Container>
        </div>
    )
}