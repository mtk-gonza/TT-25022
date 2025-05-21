import React from 'react'
import { Link } from 'react-router-dom'
import { Loading } from './Loading.jsx'

import { news } from './../utils/news.js'

import './../styles/Card.css'

export const Card = ({ product }) => {
    const isNew = news(product.createdAt, 14)

    if (!product) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    return (
        <article className='card-item' >
            <picture className='card-item__cover'>
                {isNew && <span className='card-item__tag'>Nuevo</span>}
                <img className='card-item__img--front slider' src={product.image_front} alt={`Figura coleccionable Funko de un ${product.name}`} />
                <img className='card-item__img--back slider' src={product.image_back} alt={`Figura coleccionable Funko de un ${product.name} en caja`} />
            </picture>
            <div className='card-item__content'>
                <p className='card-item__licence'>{product.licence.name}</p>
                <h4 className='card-item__name'>{product.name}</h4>
                <p className='card-item__price'>${product.price}.-</p>
                <p className='card-item__promo'>{product.dues} CUOTAS SIN INTERÉS</p>
                <Link className='card-item__see-more' to={`/detail/${product.id}`}>VER MAS</Link>
            </div>
        </article>
    )
}