import React from 'react'

import { Main } from './../components/Main.jsx'
import { Container } from './../components/Container.jsx'
import { Tabs } from './../components/Tabs.jsx'

import './../styles/Dashboard.css'

export const Dashboard = () => {  
    return (
        <Main className='dashboard'>            
            <Container>
                <h1>Bienvenido al Dashboard</h1>
                <Tabs />
            </Container>
        </Main>
    )
}