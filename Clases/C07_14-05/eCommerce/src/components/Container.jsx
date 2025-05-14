import React from 'react'

import './../styles/container.css'

export const Container = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    )
}