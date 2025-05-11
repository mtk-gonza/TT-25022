import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Loading } from './components/Loading.jsx'

export const App = () => {
    const [products, setProducts] = useState([])
    const [licences, setLicences] = useState([])
    const [categories, setCategories] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState([])

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
        const loadData = async () => {
            setIsLoading(true)
            try {
                const [productsRes, licencesRes, categoriesRes] = await Promise.all([
                    fetch('/data/products.json'),
                    fetch('/data/licences.json'),
                    fetch('/data/categories.json')
                ])

                const productsData = await productsRes.json()
                const licencesData = await licencesRes.json()
                const categoriesData = await categoriesRes.json()

                const licenceMap = Object.fromEntries(licencesData.map(l => [l.id, l]))
                const categoryMap = Object.fromEntries(categoriesData.map(c => [c.id, c]))

                const enrichedProducts = productsData.map(product => ({
                    ...product,
                    licence: licenceMap[product.licence_id],
                    category: categoryMap[product.category_id]
                }))

                setLicences(licencesData)
                setCategories(categoriesData)
                setProducts(enrichedProducts)

            } catch (err) {
                console.error('Error al cargar los datos:', err)
            } finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [])

    return (
        isLoading ? <Loading /> :
            <BrowserRouter>
                <Header 
                    categories={categories} 
                    cartItems={cartItems} 
                    setCartItems={setCartItems} 
                    removeCartItem={handlerRemoveCartItem}
                />
                <Router 
                    products={products} 
                    licences={licences} 
                    categories={categories} 
                    addToCart={handlerAddToCart}
                />
                <Footer />
            </BrowserRouter>
    )
}