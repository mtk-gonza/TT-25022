import React, { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './layouts/Home.jsx'

export const App = () => {
    const [cart, setCart] = useState([])

    const handlerAddToCart = (product) => {
        setCart((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id)

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...prevItems, { ...product, quantity: 1 }]
        })
    }

    const handlerClearCart = () => {
        setCart([])
    }

    return (
        <>
            <Header />
            <Home cart={cart} handlerAddToCart={handlerAddToCart} handlerClearCart={handlerClearCart} />
            <Footer />
        </>
    )
}