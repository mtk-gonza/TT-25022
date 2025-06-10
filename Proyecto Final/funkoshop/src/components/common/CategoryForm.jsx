import React, { useState, useRef, useEffect } from 'react'

import { Button } from './Button.jsx'
import { Message } from './Message.jsx'

import { useCategories } from './../../hooks/useCategories.jsx'
import { useWarning } from './../../hooks/useWarning.jsx'

import { getFormMessages } from './../../utils/messageUtils.js'

const initialCategoryState = {
    name: '',
    description: ''
}

export const CategoryForm = ({ selectedItem = {}, onClosed }) => {
    const [category, setCategory] = useState(initialCategoryState)
    const isInitialLoad = useRef(true)
    const [errors, setErrors] = useState({})
    const { addCategory, updateCategory } = useCategories()
    const { isOpenWarning, warning, titleWarning, messageWarning, handleClosedWarning } = useWarning()

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
            const isUpdate = !!category.id;
            const response = isUpdate ? await updateCategory(category) : await addCategory(category)
            const { title, message } = getFormMessages('Categoria', isUpdate, !!response)

            warning(title, message, onClosed)

            if (response) {
                setCategory(initialCategoryState)
                isInitialLoad.current = true
            }

        } catch (err) {
            console.error(err)
            const { title, message } = getFormMessages('Categoria', !!category.id, false)
            warning(title, message, onClosed)
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
            {isOpenWarning && (
                <Message
                    isOpen={isOpenWarning}
                    title={titleWarning}
                    message={messageWarning}
                    onCancel={handleClosedWarning}
                    isConfirm={false}
                />
            )}
        </div>
    )
}