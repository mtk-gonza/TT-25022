import React, { useState, useRef, useEffect } from 'react'

import { Button } from './Button.jsx'
import { Message } from './Message.jsx'

import { useUsers } from './../../hooks/useUsers.jsx'
import { useRoles } from './../../hooks/useRoles.jsx'
import { useWarning } from './../../hooks/useWarning.jsx'

import { getFormMessages } from './../../utils/messageUtils.js'

const initialUserState = {
    name: '',
    last_name: '',
    password: '',
    email: '',
    role_id: 0,
}

export const UserForm = ({ selectedItem = {}, onClosed }) => {
    const [user, setUser] = useState(initialUserState)
    const isInitialLoad = useRef(true)
    const [errors, setErrors] = useState({})
    const { addUser, updateUser } = useUsers()
    const { roles } = useRoles()
    const { isOpenWarning, warning, titleWarning, messageWarning, handleClosedWarning } = useWarning()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleLicenceChange = (e) => {
        const selectedLicence = roles.find(rol => rol.id === e.target.value);
        setUser((prev) => ({
            ...prev,
            role_id: selectedLicence.id,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const isUpdate = !!user.id;
            const response = isUpdate ? await updateUser(user) : await addUser(user)
            const { title, message } = getFormMessages('Usuario', isUpdate, !!response)

            warning(title, message, onClosed)

            if (response) {
                setUser(initialUserState)
                isInitialLoad.current = true
            }

        } catch (err) {
            console.error(err)
            const { title, message } = getFormMessages('Usuario', !!user.id, false)
            warning(title, message, onClosed)
        }
    }

    useEffect(() => {
        if (isInitialLoad.current) {
            if (selectedItem && selectedItem.id) {
                setUser(selectedItem)
            } else {
                setUser(initialUserState)
            }
            isInitialLoad.current = false
        }
    }, [selectedItem])

    return (
        <div className='user-form'>
            <div className='form__header'>
                <h2 className='form__title'>
                    {user.id ? 'Actualizar Usuario' : 'Agregar Usuario'}
                </h2>
            </div>
            <form className='form__content' onSubmit={handleSubmit} >
                <div className='form__box--grid'>
                    <label className='form__label'>Nombre:</label>
                    <input className='form__input' type='text' name='name' value={user.name} onChange={handleChange} required />
                    {errors.name && <p className='form__error'>{errors.name}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Apellido:</label>
                    <input className='form__input' type='text' name='last_name' value={user.last_name} onChange={handleChange} required />
                    {errors.last_name && <p className='form__error'>{errors.last_name}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Email:</label>
                    <input className='form__input' type='text' name='email' value={user.email} onChange={handleChange} required />
                    {errors.email && <p className='form__error'>{errors.email}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Contraseña:</label>
                    <input className='form__input' type='password' name='password' value={user.password} onChange={handleChange} required />
                    {errors.password && <p className='form__error'>{errors.password}</p>}
                </div>
                <div className='form__box--grid'>
                    <label className='form__label'>Rol:</label>
                    <select className='form__select' name='role_id' value={user.role_id || ''} onChange={handleLicenceChange} required >
                        <option value=''>Seleccione un Rol</option>
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                    {errors.role_id && <p className='form__error'>{errors.role_id}</p>}
                </div>
                <div className='form__actions'>
                    <Button type='submit' className='form__btn-submit btn'>
                        {user.id ? 'Actualizar' : 'Guardar'}
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