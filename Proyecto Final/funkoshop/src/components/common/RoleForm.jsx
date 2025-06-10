import React, { useState, useRef, useEffect } from 'react'

import { Button } from './Button.jsx'
import { Message } from './Message.jsx'

import { useRoles } from './../../hooks/useRoles.jsx'
import { useWarning } from './../../hooks/useWarning.jsx'

import { getFormMessages } from './../../utils/messageUtils.js'

export const RoleForm = ({ selectedItem = {}, onClosed }) => {
    const [role, setRole] = useState({})
    const isInitialLoad = useRef(true)
    const [errors, setErrors] = useState({})
    const { addRole, updateRole } = useRoles()
    const { isOpenWarning, warning, titleWarning, messageWarning, handleClosedWarning } = useWarning()

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
            const isUpdate = !!role.id;
            const response = isUpdate ? await updateRole(role) : await addRole(role)
            const { title, message } = getFormMessages('Rol', isUpdate, !!response)

            warning(title, message, onClosed)

            if (response) {
                setRole({})
                isInitialLoad.current = true
            }

        } catch (err) {
            console.error(err)
            const { title, message } = getFormMessages('Rol', !!role.id, false)
            warning(title, message, onClosed)
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