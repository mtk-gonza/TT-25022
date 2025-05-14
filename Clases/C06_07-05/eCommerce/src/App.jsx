import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation  } from 'react-router-dom'

import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './layouts/Home.jsx'
import { Products } from './layouts/Products.jsx'
import { NotFound } from './layouts/NotFound.jsx'

import { API_URL } from './config.js'

export const App = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState([])
    const [isLoading, setIsLoading] = useState()
    const [cartItems, setCartItems] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${API_URL}/products`)
            const result = await response.json()
            await new Promise(resolve => setTimeout(resolve, 1000))
            setProducts(result)
        } catch (err) {
            setError(err)
            console.log(error)
            console.error('Error al cargar los datos:', error)
        } finally {
            setIsLoading(false)
        }
    }

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
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return null
                    }
                } else {
                    return item
                }
            }).filter(item => item != null)
        })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <BrowserRouter>
            <Header
                cartItems={cartItems}
                setCartItems={setCartItems}
                removeCartItem={handlerRemoveCartItem}
            />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products products={products} isLoading={isLoading} addToCart={handlerAddToCart} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}