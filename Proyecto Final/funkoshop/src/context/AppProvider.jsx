import React from 'react'
import { AuthProvider } from './AuthContext.jsx'
import { CartProvider } from './CartContext.jsx'
import { ProductsProvider } from './ProductsContext.jsx'
import { UsersProvider } from './UsersContext.jsx'

export const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            <CartProvider>
                <ProductsProvider>
                    <UsersProvider>
                        {children}
                    </UsersProvider>
                </ProductsProvider>
            </CartProvider>
        </AuthProvider>
    )
}