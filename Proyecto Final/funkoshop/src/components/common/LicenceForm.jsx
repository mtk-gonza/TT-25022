import React, { useState, useRef, useEffect } from 'react'

import { Button } from './Button.jsx'
import { Message } from './Message.jsx'

import { useLicences } from './../../hooks/useLicences.jsx'
import { useWarning } from './../../hooks/useWarning.jsx'

import { getFormMessages } from './../../utils/messageUtils.js'

const initialLicenceState = {
    name: '',
    description: '',
    image: ''
}

export const LicenceForm = ({ selectedItem = {}, onClosed }) => {
    const [licence, setLicence] = useState(initialLicenceState)
    const isInitialLoad = useRef(true)
    const [errors, setErrors] = useState({})
    const { addLicence, updateLicence } = useLicences()
    const { isOpenWarning, warning, titleWarning, messageWarning, handleClosedWarning } = useWarning()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLicence((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const isUpdate = !!licence.id;
            const response = isUpdate ? await updateLicence(licence) : await addLicence(licence)
            const { title, message } = getFormMessages('Licencia', isUpdate, !!response)

            warning(title, message, onClosed)

            if (response) {
                setLicence(initialLicenceState)
                isInitialLoad.current = true
            }

        } catch (err) {
            console.error(err)
            const { title, message } = getFormMessages('Licencia', !!licence.id, false)
            warning(title, message, onClosed)
        }
    }

    useEffect(() => {
        if (isInitialLoad.current) {
            if (selectedItem && selectedItem.id) {
                setLicence(selectedItem)
            } else {
                setLicence(initialLicenceState)
            }
            isInitialLoad.current = false
        }
    }, [selectedItem])

    return (
        <div className='licence-form'>
            <div className='form__header'>
                <h2 className='form__title'>
                    {licence.id ? 'Actualizar Licencia' : 'Agregar Licencia'}
                </h2>
            </div>
            <form className='form__content' onSubmit={handleSubmit} >
                <div className='form__box--grid'>
                    <label className='form__label'>Nombre:</label>
                    <input className='form__input' type='text' name='name' value={licence.name} onChange={handleChange} required />
                    {errors.name && <p className='form__error'>{errors.name}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Descripcion:</label>
                    <input className='form__input' type='text' name='description' value={licence.description} onChange={handleChange} required />
                    {errors.description && <p className='form__error'>{errors.description}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Imagen URL</label>
                    <input className='form__input' type='text' name='image' value={licence.image} onChange={handleChange} required />
                    {errors.image && <p className='form__error'>{errors.image}</p>}
                </div>
                <div className='form__actions'>
                    <Button type='submit' className={licence.id ? 'btn btn-edit' : 'btn btn-add'}>
                        {licence.id ? 'Actualizar' : 'Guardar'}
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