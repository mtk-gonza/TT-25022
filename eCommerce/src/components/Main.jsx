import React from 'react'
import { ProductList } from './ProductList.jsx'
import { Cart } from './../Cart/Cart.jsx'

import './../styles/Main.css'

export const Main = ({products, cart, addToCart, clearCart}) => {

    return (
        <main className='main'>
            <ProductList products={products} addToCart={addToCart}/>
            <Cart cart={cart} clearCart={clearCart} />
        </main>
    )
}