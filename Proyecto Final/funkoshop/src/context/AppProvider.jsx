import React from 'react'
import { AuthProvider } from './AuthContext.jsx'
import { CartProvider } from './CartContext.jsx'
import { ProductsProvider } from './ProductsContext.jsx'

export const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            <CartProvider>
                <ProductsProvider>
                    {children}
                </ProductsProvider>
            </CartProvider>
        </AuthProvider>
    )
}