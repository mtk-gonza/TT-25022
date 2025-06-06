import React, { useState, useEffect } from 'react'

import { ProductsContext } from './../context/ProductsContext.jsx'

import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from './../services/productService.js'
import { news } from './../utils/news.js'

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [latestReleases, setLatestReleases] = useState([])
    const [errorProducts, setErrorProducts] = useState(null)
    const [isLoadingProducts, setIsLoadingProducts] = useState(false)

    const loadProducts = async () => {
        setIsLoadingProducts(true)
        try {
            const response = await getProducts()
            setProducts(response)
            const releases = response.filter(product => news(product.created_at, 30))
            setLatestReleases(releases)
        } catch (err) {
            setErrorProducts(err.message)
            setIsLoadingProducts(false)
        } finally {
            setIsLoadingProducts(false)
        }
    }

    const actions = {
        addProduct: async (newProduct) => {
            const product = await createProduct(newProduct)
            setProducts((prev) => [...prev, product])
        },
        updateProduct: async (updatedProduct) => {
            const updated = await updateProduct(updatedProduct)
            setProducts((prev) =>
                prev.map((p) => (p.id === updated.id ? updated : p))
            )
        },
        deleteProduct: async (id) => {
            await deleteProduct(id);
            setProducts((prev) => prev.filter((p) => p.id !== id))
        },
        getProductById: async (id) => {
            return await getProductById(id)
        }
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{
            products,
            latestReleases,
            errorProducts,
            loadProducts,
            isLoadingProducts,
            ...actions
        }}>
            {children}
        </ProductsContext.Provider>
    )
}