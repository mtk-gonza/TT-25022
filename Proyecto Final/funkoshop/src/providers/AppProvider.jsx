import React from 'react'

import { CategoriesProvider } from './CategoriesProvider.jsx'
import { LicencesProvider } from './LicencesProvider.jsx'
import { RolesProvider } from './RolesProvider.jsx'
import { AuthProvider } from './AuthProvider.jsx'
import { CartProvider } from './CartProvider.jsx'
import { ProductsProvider } from './ProductsProvider.jsx'
import { UsersProvider } from './UsersProvider.jsx'
import { FavoritesProvider } from './FavoritesProvider.jsx'

export const AppProvider = ({ children }) => {
    return (
        <RolesProvider>
            <AuthProvider>
                <CartProvider>
                    <CategoriesProvider>
                        <LicencesProvider>
                            <ProductsProvider>
                                <UsersProvider>
                                    <FavoritesProvider>
                                        {children}
                                    </FavoritesProvider>
                                </UsersProvider>
                            </ProductsProvider>
                        </LicencesProvider>
                    </CategoriesProvider>
                </CartProvider>
            </AuthProvider>
        </RolesProvider>
    )
}