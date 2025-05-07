import React, { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './layouts/Home.jsx'

export const App = () => {
    const [cart, setCart] = useState([])

    const handlerAddToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id)

        if (existingItem) {
            setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        } else {
            setCart([...cart, { ...product, quantity: 1 }])
        }
    }

    const handlerRemoveCartItem = (product) => {
        setCart(cart => {
            return cart.map(item => {                
                if (item.id === product.id) {       
                    if (item.quantity > 1){
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return null
                    }  
                } else {
                    return item
                }
            }).filter(item => item != null)
        })
    }

    const handlerClearCart = () => {
        setCart([])
    }

    return (
        <>
            <Header cartItems={cart} setCartItems={setCart} clearCart={handlerClearCart} removeCartItem={handlerRemoveCartItem} />
            <Home AddToCart={handlerAddToCart}/>
            <Footer />
        </>
    )
}