import React from 'react'

import './../styles/Container.css'

export const Container = ({ children }) => {
    return (
        <div className='container'>
            { children }
        </div>
    )
}