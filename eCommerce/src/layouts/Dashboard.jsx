import React from 'react'

import { Main } from './../components/Main.jsx'
import { Tabs } from './../components/Tabs.jsx'

import './../styles/Dashboard.css'

export const Dashboard = () => {  
    return (
        <Main className='dashboard'>            
            <div className='container'>
                <h1>Bienvenido al Dashboard</h1>
                <Tabs />
            </div>
        </Main>
    )
}