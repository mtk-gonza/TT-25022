import { useState } from 'react'

export const useCart = () => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (productToAdd) => {
        const { id, quantity, stock } = productToAdd

        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === id)

            if (existingItem) {
                const newQuantity = existingItem.quantity + quantity
                if (newQuantity > stock) {
                    alert(`Solo quedan ${stock - existingItem.quantity} disponibles.`)
                    return prevItems
                }
                return prevItems.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            } else {
                if (quantity > stock) {
                    alert(`Solo hay ${stock} disponibles.`)
                    return prevItems
                }
                return [...prevItems, { ...productToAdd }]
            }
        })
    }

    const removeFromCart = (product) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === product.id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0)
        )
    }

    const clearCart = () => {
        setCartItems([])
    }

    return { cartItems, clearCart, addToCart, removeFromCart }
}