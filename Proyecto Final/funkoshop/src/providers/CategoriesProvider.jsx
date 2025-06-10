import React, { useState, useEffect } from 'react'

import { CategoriesContext } from './../context/CategoriesContext.jsx'

import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from './../services/categoryService.js'

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [errorCategories, setErrorCategories] = useState(null)
    const [isLoadingCategories, setIsLoadingCategories] = useState(false)

    const actionsCategories = {
        getCategories: async () => {
            setErrorCategories(null)
            setIsLoadingCategories(true)
            try {
                const response = await getCategories()
                setCategories(response)
                return response
            } catch (err) {
                setErrorCategories(err.message)
                throw err
            } finally {
                setIsLoadingCategories(false)
            }
        },
        getCategoryById: async (id) => {
            setErrorCategories(null)
            setIsLoadingCategories(true)
            try {
                const response =  await getCategoryById(id)
                return response
            } catch (err) {
                setErrorCategories(err.message)
                throw err
            } finally {
                setIsLoadingCategories(false)
            }            
        },
        addCategory: async (newCategory) => {
            setErrorCategories(null)
            setIsLoadingCategories(true)
            try {
                const response = await createCategory(newCategory)
                setCategories((prev) => [...prev, response])  
                return response              
            } catch (err) {
                setErrorCategories(err.message)
                throw err
            } finally {
                setIsLoadingCategories(false)
            }
        },
        updateCategory: async (updatedCategory) => {
            setErrorCategories(null)
            setIsLoadingCategories(true)
            try {                
                const response = await updateCategory(updatedCategory)
                setCategories((prev) =>
                    prev.map((p) => (p.id === response.id ? response : p))
                )
                return response
            } catch (err) {
                setErrorCategories(err.message)
                throw err                
            } finally {
                setIsLoadingCategories(false)
            }
        },
        deleteCategory: async (id) => {
            setErrorCategories(null)
            setIsLoadingCategories(true)
            try {                
                const response = await deleteCategory(id);
                setCategories((prev) => prev.filter((p) => p.id !== id))
                return response || true 
            } catch (err) {
                setErrorCategories(err.message)
                throw err 
            } finally {
                setIsLoadingCategories(false)
            }
        }
    }

    useEffect(() => {
        actionsCategories.getCategories()
    }, [])

    return (
        <CategoriesContext.Provider value={{
            categories,
            errorCategories,
            isLoadingCategories,
            ...actionsCategories
        }}>
            {children}
        </CategoriesContext.Provider>
    )
}