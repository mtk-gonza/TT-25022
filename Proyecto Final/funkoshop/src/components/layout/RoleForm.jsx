import React, { useState, useRef, useEffect } from 'react'

import { Button } from './../common/Button.jsx'

import { createRole, updateRole } from './../../services/roleService.js'

export const RoleForm = ({ selectedItem = {}, onClosed }) => {
    const [role, setRole] = useState({})
    const isInitialLoad = useRef(true)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRole((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response
            if (role.id) {
                response = await updateRole(role)
            } else {
                response = await createRole(role)
            }
            if (response) {
                alert(role.id ? 'Rol actualizado exitosamente' : 'Rol creado exitosamente')
                setRole({})
                isInitialLoad.current = true
                onClosed()
            }
        } catch (err) {
            console.error(err)
            alert('Hubo un error al procesar el Rol. Inténtalo más tarde.')
        }
    }

    useEffect(() => {
        if (isInitialLoad.current) {
            if (selectedItem && selectedItem.id) {
                setRole(selectedItem)
            } else {
                setRole({})
            }
            isInitialLoad.current = false
        }
    }, [selectedItem])

    return (
        <div className='rol-form'>
            <div className='form__header'>
                <h2 className='form__title'>
                    {role.id ? 'Actualizar Rol' : 'Agregar Rol'}
                </h2>
            </div>
            <form className='form__content' onSubmit={handleSubmit} >
                <div className='form__box--grid'>
                    <label className='form__label'>Nombre:</label>
                    <input className='form__input' type='text' name='name' value={role.name} onChange={handleChange} required />
                    {errors.name && <p className='form__error'>{errors.name}</p>}
                </div>
                <div className='form__actions'>
                    <Button type='submit' className='form__btn-submit btn'>
                        {role.id ? 'Actualizar' : 'Guardar'}
                    </Button>
                    <Button className='form__btn-cancel btn btn--primary' onClick={onClosed}>
                        Cancelar
                    </Button>
                </div>
            </form>
        </div>
    )
}