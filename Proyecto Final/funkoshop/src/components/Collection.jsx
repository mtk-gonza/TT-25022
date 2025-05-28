import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './Container.jsx'

import './../styles/Collection.css'

export const Collection = ({licence, nameClass}) => {         
    return (
        <section className='collection'>
            <Container>
                <article className='collection__content'>
                    <h3 className='collection__title'>{licence.name}</h3>
                    <p className='collection__text'>{licence.description}</p>
                    <Link className='collection__link' to={`/shop?licence_id=${licence.id}`} >VER COLECCIÓN</Link>                              
                </article>
                <picture className={nameClass}>
                    <img className='collection__img' src={licence.image} alt={`Figura de ${licence.name}`}/>
                </picture>
            </Container>
        </section>  
    )
}