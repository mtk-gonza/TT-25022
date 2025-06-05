import React, { useState, useRef, useEffect } from 'react'

import { Button } from './../common/Button.jsx'

import { createLicence, updateLicence} from './../../services/licenceService.js'

const initialLicenceState = {
    name: '',
    description: '',
    image: ''
}

export const LicenceForm = ({ selectedItem = {}, onSubmit, onClosed }) => {
    const [licence, setLicence] = useState(initialLicenceState)
    const isInitialLoad = useRef(true)
    const [errors, setErrors] = useState({})

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
            let response
            if (licence.id) {
                response = await updateLicence(licence)
            } else {
                response = await createLicence(licence)
            }
            if (response) {
                alert(licence.id ? 'Licencia actualizada exitosamente' : 'Licencia creada exitosamente')
                setLicence(initialLicenceState)
                isInitialLoad.current = true
                onClosed()
            }
        } catch (err) {
            console.error(err)
            alert('Hubo un error al procesar la licencia. Inténtalo más tarde.')
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
                    <Button type='submit' className='form__btn-submit btn'>
                        {licence.id ? 'Actualizar' : 'Guardar'}
                    </Button>
                    <Button className='form__btn-cancel btn btn--primary' onClick={onClosed}>
                        Cancelar
                    </Button>
                </div>
            </form>
        </div>
    )
}