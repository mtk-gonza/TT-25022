import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Loading } from './Loading.jsx'
import { Modal } from './Modal.jsx'
import { Detail } from './Detail.jsx'

import './../styles/Card.css'

export const Card = ({ product, addToCart }) => {
    const [isOpen, setIsOpen] = useState(false)

    const currentDate = new Date()
    const createdAt = new Date(product.createdAt)
    const differenceInMilliseconds = currentDate - createdAt
    const millisecondsInADay = 1000 * 60 * 60 * 24
    const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInADay)
    const isNew = differenceInDays < 7

    const handlerIsOpen = () => {
        setIsOpen(true)
    }
    const handlerCloseModal = () => {
        setIsOpen(false)
    }

    if (!product) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    return (
        <>
            <article className="card-item" onClick={handlerIsOpen}>
                <picture className="card-item__cover">
                    {isNew && <span className="card-item__tag">Nuevo</span>}
                    <img className="card-item__img--front slider" src={product.image_front} alt={`Figura coleccionable Funko de un ${product.name}`} />
                    <img className="card-item__img--back slider" src={product.image_back} alt={`Figura coleccionable Funko de un ${product.name} en caja`} />
                </picture>
                <div className="card-item__content">
                    <p className="card-item__licence">{product.licence.name}</p>
                    <h4 className="card-item__name">{product.name}</h4>
                    <p className="card-item__price">${product.price}.-</p>
                    <p className="card-item__promo">{product.dues} CUOTAS SIN INTERÉS</p>
                </div>
            </article>
            <Modal isOpen={isOpen} onClose={handlerCloseModal}>
                <Detail product={product} addToCart={addToCart}/>
            </Modal>
        </>
    )
}