import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './layouts/Home.jsx'
import { Products } from './layouts/Products.jsx'
import { NotFound } from './layouts/NotFound.jsx'

import { useProducts } from './hooks/useProducts.js'
import { useCart } from './hooks/useCart.js'

export const App = () => {
    const { products, error, isLoading } = useProducts()
    const { cartItems, clearCart, addToCart, removeFromCart } = useCart()
    return (
        <BrowserRouter>
            <Header
                cartItems={cartItems}
                clearCart={clearCart}
                removeFromCart={removeFromCart}
            />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products products={products} isLoading={isLoading} addToCart={addToCart} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}