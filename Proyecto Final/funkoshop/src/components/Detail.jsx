import React, { useState } from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
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

    return (
        <main className="container">            
            <section className="item">
                <picture className="detail-item__cover">
                    <img className="detail-item__img--front" src={product.image_front} alt={`Figura coleccionable Funko de un ${product.name}`} />
                    <img className="detail-item__img--back" src={product.image_back} alt={`Figura coleccionable Funko de un ${product.name} en caja`}/>
                </picture>
                <article className="item__info">
                    <p className="item__licence">{ product.licence.name }</p>
                    <h3 className="item__name">{ product.name }</h3>
                    <p className="item__description">{ product.description }</p>
                    <p className="item__price">{product.price}</p>
                    <div className="item__cart">
                        <button id="subtract" className="item__quantity" onClick={decrease}>
                            -
                        </button>
                        <span className="item__input">{quantity}</span>
                        <button id="add" className="item__quantity" onClick={increase}>
                            +
                        </button>
                        <button className="item__submit btn btn--primary btn--medium" onClick={() => addToCart({...product, quantity: quantity})}>
                            Agregar al carrito
                        </button>
                    </div>
                    <p className="item__promo"><a href="">Ver métodos de pago</a> - {product.dues} CUOTAS SIN INTERÉS</p>
                </article>
            </section>
        </main>
    )
}