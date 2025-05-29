import { API_URL } from './../config.js'
import { fetchData, postData } from './fetchHelper.js'

export const getProducts = async () => {
    try {
        const [products, licences, categories] = await Promise.all([
            fetchData(`${API_URL}/products`),
            fetchData('/data/licences.json'),
            fetchData('/data/categories.json')
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

export const createProduct = async (data) => {
    data.createdAt = new Date().toISOString().slice(0, 19)
    data.updatedAt = new Date().toISOString().slice(0, 19)
    const response = postData(API_URL, data)
    return response
}