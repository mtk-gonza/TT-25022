import React from 'react'
import { Link } from 'react-router-dom'

import './../styles/Home.css'

export const Home = () => {
    return (
        <div className='home'>
            <Link to='/products'>Productos</Link>
        </div>
    )
}