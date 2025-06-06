import React, { useState, useRef, useEffect } from 'react'

import { Button } from './Button.jsx'

import { createUser, updateUser } from './../../services/userService.js'

import { useRoles } from './../../hooks/useRoles.jsx'

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
    const { roles } = useRoles()

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
            let response
            if (user.id) {
                response = await updateUser(user)
            } else {
                response = await createUser(user)
            }
            if (response) {
                alert(user.id ? 'Usuario actualizado exitosamente' : 'Usuario creado exitosamente')
                setUser(initialUserState)
                isInitialLoad.current = true
                onClosed()
            }
        } catch (err) {
            console.error(err)
            alert('Hubo un error al procesar el Usuario. Inténtalo más tarde.')
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
        </div>
    )
}