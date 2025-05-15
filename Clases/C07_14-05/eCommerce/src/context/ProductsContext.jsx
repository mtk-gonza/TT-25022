import { createContext, useState, useEffect } from 'react'
import { API_URL } from './../config.js'

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
                const [productsRes, licencesRes, categoriesRes] = await Promise.all([
                    fetch(`${API_URL}/products`),
                    fetch('/data/licences.json'),
                    fetch('/data/categories.json')
                ])

                const productsData = await productsRes.json()
                const licencesData = await licencesRes.json()
                const categoriesData = await categoriesRes.json()

                const licenceMap = Object.fromEntries(licencesData.map(l => [l.id, l]))
                const categoryMap = Object.fromEntries(categoriesData.map(c => [c.id, c]))

                const enrichedProducts = productsData.map(product => ({
                    ...product,
                    licence: licenceMap[product.licence_id],
                    category: categoryMap[product.category_id]
                }))

                setLicences(licencesData)
                setCategories(categoriesData)
                setProducts(enrichedProducts)
            } catch (err) {
                setError(err)
                console.error('Error al cargar los datos:', err)
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [])

    return (
        <ProductsContext.Provider value={{ products, error, isLoading }}>
            {children}
        </ProductsContext.Provider>
    )
}