import { createContext, useState, useEffect } from 'react'
import { getProducts } from './../services/productsService.js'

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
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
            licences, 
            categories, 
            error, 
            isLoading 
        }}>
            {children}
        </ProductsContext.Provider>
    )
}