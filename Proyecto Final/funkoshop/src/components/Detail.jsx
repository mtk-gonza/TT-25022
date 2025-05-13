import React, { useState } from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Container } from './Container.jsx'
import { Icon } from './Icon.jsx'

import './../styles/Detail.css'

export const Detail = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1)

    const increase = () => {
        setQuantity(prev => (prev != product.stock ? prev + 1 : prev))
    }

    const decrease = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    }

    if (!product) {
        return (
            <div className="container">
                <Icon css='icon' icon={faSpinner} />
            </div>
        )
    }

    const discountedPrice = product.price - (product.price * product.discount) / 100

    return (
        <Container>
            <section className='detail-item'>
                <picture className='detail-item__cover'>
                    <img className='detail-item__img--front' src={product.image_front} alt={`Figura coleccionable Funko de un ${product.name}`} />
                    <img className='detail-item__img--back' src={product.image_back} alt={`Figura coleccionable Funko de un ${product.name} en caja`} />
                </picture>
                <article className='detail-item__info'>
                    <p className='detail-item__licence'>{product.licence.name} - {product.sku}</p>
                    <h3 className='detail-item__name'>{product.name}</h3>
                    <p className='detail-item__description'>{product.description}</p>
                    {product.discount > 0 ? (
                        <>
                            <p className='detail-item__price'>
                                <span className='detail-item__discount'>Descuento del {product.discount}%</span>
                                <span className='detail-item__original-price'> ${product.price}</span>
                                <span className='detail-item__discounted-price'>${discountedPrice.toFixed(2)}</span>
                            </p>
                        </>
                    ) : (
                        <p className='detail-item__price'>${product.price}</p>
                    )}
                    <p>Stock: {product.stock}</p>
                    <div className='detail-item__cart'>
                        <button id='subtract' className='detail-item__quantity' onClick={decrease}>
                            -
                        </button>
                        <span className='detail-item__input'>{quantity}</span>
                        <button className='detail-item__quantity' onClick={increase}>
                            +
                        </button>
                        <button className='detail-item__submit btn btn--primary btn--medium' onClick={() => addToCart({ ...product, quantity: quantity })}>
                            Agregar al carrito
                        </button>
                    </div>
                    <p className='detail-item__promo'><a href="">Ver métodos de pago</a> - {product.dues} CUOTAS SIN INTERÉS</p>
                </article>
            </section>
        </Container>
    )
}