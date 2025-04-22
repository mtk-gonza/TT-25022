import React from 'react'

export const Header = () => {
    let estilos = { backgroundColor: '#4CAF50', padding: '10px', textAlign: 'center', color: 'white' }
    return (
        <header style={estilos}>
            <h1>Bienvenidos a mi App React</h1>
        </header>
    )
}