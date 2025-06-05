import React, { createContext, useState, useEffect } from 'react'
import { getProducts } from './../services/productService.js'
import { getLicences } from './../services/licenceService.js'
import { getCategories } from './../services/categoryService.js'
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
                const productsResponse = await getProducts()
                const licencesResponse = await getLicences()
                const categoryResponse = await getCategories()
                setLicences(licencesResponse)
                setCategories(categoryResponse)
                setProducts(productsResponse.products)
                const releases = productsResponse.products.filter(product => news(product.created_at, 30))
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