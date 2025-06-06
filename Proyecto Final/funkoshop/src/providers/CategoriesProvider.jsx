import React, { useState, useEffect } from 'react'

import { CategoriesContext } from './../context/CategoriesContext.jsx'

import { getCategories } from './../services/categoryService.js'

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [errorCategories, setErrorCategories] = useState(null)
    const [isLoadingCategories, setIsLoadingCategories] = useState(false)

    const loadCategories = async () => {
        setIsLoadingCategories(true)
        try {
            const response = await getCategories()
            setCategories(response)
        } catch (err) {
            setErrorCategories(err.message || 'No se pudieron cargar los productos')
            console.error('Error al cargar los datos:', err)
            console.log(errorCategories)
        } finally {
            setIsLoadingCategories(false)
        }
    }

    useEffect(() => {
        loadCategories()
    }, [])

    return (
        <CategoriesContext.Provider value={{
            categories,
            errorCategories,
            loadCategories,
            isLoadingCategories
        }}>
            {children}
        </CategoriesContext.Provider>
    )
}