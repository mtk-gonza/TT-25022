import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { createUser } from './../../services/userService.js'

import './../../styles/components/layouts/RegisterForm.css'

const initialUserState = {
    id: null,
    name: '',
    last_name: '',
    email: '',
    password: '',
}

export const RegisterForm = () => {
    const [user, setUser] = useState(initialUserState)
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [isCheck, setIsCheck] = useState(false)

    const pwsPlaceHolder = '●●●●●●●●●●●'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isCheck) {
            alert('Debes aceptar los términos y condiciones')
            return
        }
        if (user.password !== rePassword) {
            alert('Las contraseñas no coinciden')
            return
        }
        
        try {
            user.role_id = 2
            const newUser = await createUser(user)
            if (newUser) {
                alert('Usuario creado exitosamente')
                setUser(initialUserState)
                setRePassword('')
                setIsCheck(false)
            }
        } catch (error) {
            console.error('Error al crear el usuario:', error.message)
            alert('Hubo un error al crear el usuario. Inténtalo más tarde.')
        }
    }

    return (
        <div className='register-form'>
            <div className='register__header'>
                <h2 className='register__title'>CREA TU CUENTA</h2>
                <p className='register__subtitle'>Completa el formulario para ser parte del mundo de los Funkos</p>
            </div>
            <form className='register__form' onSubmit={handleSubmit}>
                <div className='form__box--grid'>
                    <label className='form__label' htmlFor='name'>Nombre:</label>
                    <input className='form__input' type='text' name='name' placeholder='John' value={user.name} onChange={handleChange} required />
                </div>
                <div className='form__box--grid'>
                    <label className='form__label' htmlFor='last_name'>Apellido:</label>
                    <input className='form__input' type='text' name='last_name' placeholder='Doe' value={user.last_name} onChange={handleChange} required />
                </div>
                <div className='form__box--grid'>
                    <label className='form__label' htmlFor='email'>Email:</label>
                    <input className='form__input' type='email' name='email' placeholder='johndoe@funkoshop.com' value={user.email} onChange={handleChange} required />
                </div>
                <div className='form__box--grid'>
                    <label className='form__label' htmlFor='password'>Contraseña:</label>
                    <input className='form__input' type='password' name='password' placeholder={pwsPlaceHolder} value={user.password} onChange={handleChange} required />
                </div>
                <div className='form__box--grid'>
                    <label className='form__label' htmlFor='repassword'>Repite Contraseña:</label>
                    <input className='form__input' type='password' name='repassword' placeholder={pwsPlaceHolder}                        
                        value={rePassword} onChange={(e) => setRePassword(e.target.value)} required />
                </div>
                <div className='form__submission'>
                    <input className='form__btn btn btn--primary btn--large' type='submit' value='Registrar' />
                    <div className='form__terms'>
                        <input type='checkbox' value={isCheck} onClick={() => setIsCheck(!isCheck)} />
                        <label>Acepto <Link className='form__link' to='/terms'>Términos y Condiciones</Link></label>
                    </div>
                </div>
            </form>
        </div>
    )
}