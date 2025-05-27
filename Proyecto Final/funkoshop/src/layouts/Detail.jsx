import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Main } from './../components/Main.jsx'
import { Container } from '../components/Container.jsx'
import { Loading } from './../components/Loading.jsx'
import { Slider } from './../components/Slider.jsx'

import { useAuth } from './../hooks/useAuth.jsx'
import { useFavorites } from './../hooks/useFavorites.jsx'
import { useProducts } from './../hooks/useProducts.jsx'
import { useCart } from '../hooks/useCart.jsx'

import './../styles/Detail.css'

export const Detail = () => {    
    const { product_id } = useParams()
    const { isAuthenticated } = useAuth()
    const { isFavorite, toggleFavorite } = useFavorites()
    const { products } = useProducts()
    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)

    const product = products.find(producto => producto.id == product_id)
    const productsColection = products.filter(item => item.licence_id == product.licence_id & item.id != product.id)

    const isFav = isFavorite(product_id)

    const increase = () => {
        setQuantity(prev => (prev != product.stock ? prev + 1 : prev))
    }

    const decrease = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    }

    if (!product) {
        return (
            <Loading/>                
        )
    }

    const handleToggle = () => {
        toggleFavorite(product_id)
    }

    const discountedPrice = product.price - (product.price * product.discount) / 100

    return (
        <Main className='detail-item'>
            <Container>
                <picture className='detail-item__cover'>
                    <img className='detail-item__img--front' src={product.image_front} alt={`Figura coleccionable Funko de un ${product.name}`} />
                    <img className='detail-item__img--back' src={product.image_back} alt={`Figura coleccionable Funko de un ${product.name} en caja`} />
                    {isAuthenticated &&
                        <span className='detail-item__favorite' onClick={handleToggle}>
                            {isFav ? '❤️' : '🤍'}
                        </span>
                    }
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
            </Container>
            {productsColection.length > 1 &&  <Slider products={productsColection} title='COLECCIÓN'/>}            
        </Main>
    )
}