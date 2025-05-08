import { useState, useEffect } from 'react'
import { ProductList } from './../components/ProductList.jsx'
import { Loading } from './../components/Loading.jsx'

import './../styles/Home.css'

export const Home = ({ AddToCart }) => {  
    const [products, setProducts] = useState([])
    const [error, setError] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const API_URL = import.meta.env.VITE_API_URL

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${API_URL}/products`)
            const result = await response.json()
            await new Promise(resolve => setTimeout(resolve, 1000))
            setProducts(result)         
        } catch (err) {
            setError(err)
            console.log(error)
            console.error('Error al cargar los datos:', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() =>{
        fetchProducts()
    },[])

    return (
        <div className='home'>
            <div className='container'>
                <h1>Bienvenido a eCommerce</h1>
                {
                    isLoading ? <Loading /> :
                    <ProductList products={products} addToCart={AddToCart} />
                }
            </div>
        </div>
    )
}