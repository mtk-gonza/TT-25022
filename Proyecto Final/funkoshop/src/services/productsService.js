import { API_PRODUCTS, API_LICENCES, API_CATEGORIES} from '../config.js'
import { fetchData } from './fetchData.js'

export const getProducts = async () => {
    try {
        const [products, licences, categories] = await Promise.all([
            fetchData(API_PRODUCTS),
            fetchData(API_LICENCES),
            fetchData(API_CATEGORIES)
        ])

        const licenceMap = Object.fromEntries(licences.map(l => [l.id, l]))
        const categoryMap = Object.fromEntries(categories.map(c => [c.id, c]))

        const enrichedProducts = products.map(product => ({
            ...product,
            licence: licenceMap[product.licence_id],
            category: categoryMap[product.category_id]
        }))

        return { products: enrichedProducts, licences, categories }
        
    } catch (error) {
        console.error('Error al obtener los datos:', error)
        throw error
    }
}