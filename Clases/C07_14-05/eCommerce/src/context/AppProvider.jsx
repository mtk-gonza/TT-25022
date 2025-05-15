import React from 'react'
import { CartProvider } from './CartContext.jsx'
import { ProductsProvider } from './ProductsContext.jsx'

export const AppProvider = ({ children }) => {
    return (
        <CartProvider>
            <ProductsProvider>
                {children}
            </ProductsProvider>
        </CartProvider>
    )
}