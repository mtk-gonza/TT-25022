import { API_PRODUCTS, API_LICENCES, API_CATEGORIES} from './../config.js'
import { fetchData, fetchDataById, postData, putData, deleteDataById } from './fetchService.js'

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

        return { products: enrichedProducts}
        
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const getProductById = async (id) => {
    try {
        const product  = await fetchDataById(API_PRODUCTS, id)
        const licence = await fetchDataById(API_LICENCES, product.licence_id)
        const category = await fetchDataById(API_CATEGORIES, product.category_id)

        return {
            ...product,
            licence: licence || null,
            category: category || null
        } 

    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const createProduct = async (productData) => {
    try {
        const newProduct = await postData(API_PRODUCTS, productData)        
        return newProduct
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const updateProduct = async (productData) => {
    try {
        const updatedProduct = await putData(API_PRODUCTS, productData)
        return updatedProduct
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const deleteProduct = async (id) => {
    try {
        const success = await deleteDataById(API_PRODUCTS, id)
        return success
    } catch (err) {
        console.error(err.message)
        throw err
    }
}