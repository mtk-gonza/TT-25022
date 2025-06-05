import { API_CATEGORIES } from './../config.js'
import { fetchData, fetchDataById, postData, putData, deleteDataById } from './fetchService.js'

export const getCategories = async () => {
    try {
        const categories = await fetchData(API_CATEGORIES)
        return categories
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const createCategory = async (categoryData) => {
    try {
        const newCategory = await postData(API_CATEGORIES, categoryData)        
        return newCategory
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const getCategoryById = async (id) => {
    try {
        const category = await fetchDataById(API_CATEGORIES, id)
        return category
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const updateCategory = async (categoryData) => {
    try {
        const updatedCategory = await putData(API_CATEGORIES, categoryData)
        return updatedCategory
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const deleteCategory = async (id) => {
    try {
        const success = await deleteDataById(API_CATEGORIES, id)
        return success
    } catch (err) {
        console.error(err.message)
        throw err
    }
}