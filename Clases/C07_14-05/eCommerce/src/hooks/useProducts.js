import { useState, useEffect } from 'react'
import { API_URL } from './../config.js'

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`${API_URL}/products`)
                if (!response.ok) throw new Error('Error en la respuesta')
                const result = await response.json()
                await new Promise(resolve => setTimeout(resolve, 1000))
                setProducts(result)
            } catch (err) {
                setError(err)
                console.error('Error al cargar los datos:', err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchProducts()
    }, [])
    return { products, error, isLoading }
}