import React, { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './layouts/Home.jsx'

export const App = () => {
    const [cartItems, setCartItems] = useState([])

    const handlerAddToCart = (productToAdd) => {
        const { id, quantity } = productToAdd
        const existingItem = cartItems.find(item => item.id === id)    
        if (existingItem) {
            const newTotalQuantity = existingItem.quantity + quantity    
            if (newTotalQuantity > existingItem.stock) {
                alert(`No puedes agregar ${quantity} unidades. Solo quedan ${existingItem.stock - existingItem.quantity} disponibles.`)
                return
            }
            setCartItems(
                cartItems.map(item =>
                    item.id === id
                        ? { ...item, quantity: newTotalQuantity }
                        : item
                )
            )
        } else {
            if (quantity > productToAdd.stock) {
                alert(`No puedes agregar tantas unidades. Solo hay ${productToAdd.stock} disponibles.`)
                return
            }
            setCartItems([...cartItems, productToAdd])
        }
    }

    const handlerRemoveCartItem = (product) => {
        setCartItems(cartItems => {
            return cartItems.map(item => {                
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

    return (
        <>
            <Header 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                removeCartItem={handlerRemoveCartItem} 
            />
            <Home AddToCart={handlerAddToCart}/>
            <Footer />
        </>
    )
}