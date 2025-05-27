import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { Main } from './../components/Main.jsx'
import { Container } from '../components/Container.jsx'

import './../styles/Edit.css'

export const Edit = () => {
    const { table } = useParams();
    const Item = () => {
        switch (table) {
            case 'categories':
                return <div>categories</div>         
            case 'licences':
                return <div>licences</div>  
            case 'products':
                return <div>products</div>  
            case 'roles':
                return <div>roles</div>  
            case 'users':
                return <div>users</div>  
            default:
                return <div className='container'>No se encontró un componente para {table}</div>
        }
    }
    return (
        <Main>
            <Container>  
                <Item>            
                </Item>  
                <Link to='/dashboard/admin' className='edit__back'>Volver</Link>                      
            </Container>
        </Main>
    )
}