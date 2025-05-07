import {  Link } from 'react-router-dom'

import './../styles/Admin.css'

export const Admin = () => {
    return (
        <main className='container'>            
            <div>Tabla ADmin</div>
            <Link className='edit__back' to='/'>Volver</Link>
        </main>
    )
}