import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { createUser } from './../../services/usersService.js'

import './../../styles/components/layouts/RegisterForm.css'

export const RegisterForm = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [isCheck, setIsCheck] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isCheck) {
            alert('Debes aceptar los términos y condiciones')
            return
        }
        if (password !== rePassword) {
            alert('Las contraseñas no coinciden')
            return
        }
        const userData = {
            name,
            last_name: lastname,
            email,
            password,
            rol_id: 2,
            created_at: new Date(Date.now()).toISOString() 
        }
        try {
            const newUser = await createUser(userData)

            if (newUser) {
                alert('Usuario creado exitosamente')
                setName('')
                setLastname('')
                setEmail('')
                setPassword('')
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
                    <input
                        className='form__input'
                        type='text'
                        name='name'
                        placeholder='John'
                        required
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form__box--grid'>
                    <label className='form__label' htmlFor='lastname'>Apellido:</label>
                    <input
                        className='form__input'
                        type='text'
                        name='lastname'
                        placeholder='Doe'
                        required
                        value={lastname} onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <div className='form__box--grid'>
                    <label className='form__label' htmlFor='email'>Email:</label>
                    <input
                        className='form__input'
                        type='email'
                        name='email'
                        placeholder='johndoe@email.com'
                        required
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form__box--grid'>
                    <label className='form__label' htmlFor='password'>Contraseña:</label>
                    <input
                        className='form__input'
                        type='password'
                        name='password'
                        placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                        required
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='form__box--grid'>
                    <label className='form__label' htmlFor='repassword'>Repite Contraseña:</label>
                    <input
                        className='form__input'
                        type='password'
                        name='repassword'
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        required
                        value={rePassword} onChange={(e) => setRePassword(e.target.value)}
                    />
                </div>
                <div className='form__submission'>
                    <input
                        className='form__btn btn btn--primary btn--large'
                        type='submit'
                        value='Registrar'
                    />
                    <div className='form__terms'>
                        <input type='checkbox' value={isCheck} onClick={() => setIsCheck(!isCheck)} />
                        <label>Acepto <Link className='form__link' to='/terms'>Términos y Condiciones</Link></label>
                    </div>
                </div>
            </form>
        </div>
    )
}