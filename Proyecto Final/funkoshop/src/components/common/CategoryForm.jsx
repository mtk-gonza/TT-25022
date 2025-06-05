import React, { useState, useRef, useEffect } from 'react'

import { Button } from './Button.jsx'

import { createCategory, updateCategory } from './../../services/categoryService.js'

const initialCategoryState = {
    name: '',
    description: ''
}

export const CategoryForm = ({ selectedItem = {}, onClosed }) => {
    const [category, setCategory] = useState(initialCategoryState)
    const isInitialLoad = useRef(true)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response
            if (category.id) {
                response = await updateCategory(category)
            } else {
                response = await createCategory(category)
            }
            if (response) {
                alert(category.id ? 'Categoría actualizada exitosamente' : 'Categoría creada exitosamente')
                setCategory(initialCategoryState)
                isInitialLoad.current = true
                onClosed()
            }
        } catch (err) {
            console.error(err)
            alert('Hubo un error al procesar la categoría. Inténtalo más tarde.')
        }
    }

    useEffect(() => {
        if (isInitialLoad.current) {
            if (selectedItem && selectedItem.id) {
                setCategory(selectedItem)
            } else {
                setCategory(initialCategoryState)
            }
            isInitialLoad.current = false
        }
    }, [selectedItem])

    return (
        <div className='category-form'>
            <div className='form__header'>
                <h2 className='form__title'>
                    {category.id ? 'Actualizar Categoria' : 'Agregar Categoria'}
                </h2>
            </div>
            <form className='form__content' onSubmit={handleSubmit} >
                <div className='form__box--grid'>
                    <label className='form__label'>Nombre:</label>
                    <input className='form__input' type='text' name='name' value={category.name} onChange={handleChange} required />
                    {errors.name && <p className='form__error'>{errors.name}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Descripcion:</label>
                    <input className='form__input' type='text' name='description' value={category.description} onChange={handleChange} required />
                    {errors.description && <p className='form__error'>{errors.description}</p>}
                </div>
                <div className='form__actions'>
                    <Button type='submit' className={category.id ? 'btn btn-edit' : 'btn btn-add'}>
                        {category.id ? 'Actualizar' : 'Guardar'}
                    </Button>
                    <Button className='btn' onClick={onClosed}>
                        Cancelar
                    </Button>
                </div>
            </form>
        </div>
    )
}