import React, { createContext, useState, useEffect } from 'react'
import { getProducts } from './../services/productsService.js'
import { news } from './../utils/news.js'

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [latestReleases, setLatestReleases]= useState([])
    const [licences, setLicences] = useState([])
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true)
            try {
                const data = await getProducts()
                setLicences(data.licences)
                setCategories(data.categories)
                setProducts(data.products)
                const releases = data.products.filter(product => news(product.createdAt, 30))
                setLatestReleases(releases)
            } catch (err) {
                setError(err.message || 'No se pudieron cargar los productos')
                console.error('Error al cargar los datos:', err)
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [])

    return (
        <ProductsContext.Provider value={{ 
            products,
            latestReleases, 
            licences, 
            categories, 
            error, 
            isLoading 
        }}>
            {children}
        </ProductsContext.Provider>
    )
}