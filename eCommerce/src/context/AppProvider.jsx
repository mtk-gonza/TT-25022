import React from 'react'
import { AuthProvider } from './AuthContext.jsx'
import { CartProvider } from './CartContext.jsx'
import { ProductsProvider } from './ProductsContext.jsx'
import { UsersProvider } from './UsersContext.jsx'
import { FavoritesProvider } from './FavoritesContext.jsx'

export const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            <CartProvider>
                <ProductsProvider>
                    <UsersProvider>
                        <FavoritesProvider>
                            {children}
                        </FavoritesProvider>
                    </UsersProvider>
                </ProductsProvider>
            </CartProvider>
        </AuthProvider>
    )
}