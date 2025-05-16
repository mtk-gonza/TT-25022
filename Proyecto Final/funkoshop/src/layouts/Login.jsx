import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from './../components/Container.jsx'

import { useAuth } from './../hooks/useAuth.jsx'

import './../styles/Login.css'

export const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })

    const { login, isLoadingUser, error, setError, user, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials((prev) => ({ ...prev, [name]: value }))

        if (error) {
            setError(null)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        await login(credentials.email, credentials.password)
    }

    useEffect(() => {
        if (isAuthenticated) {
            setCredentials({ email: '', password: '' })
            navigate('/dashboard')
        }
    }, [isAuthenticated, navigate])

    return (
        <main className='login'>
            <Container>
                <div className='login__header'>
                    <h2 className='login__title'>INGRESAR A MI CUENTA</h2>
                    <p className='login__subtitle'>Para obtener novedades</p>
                </div>

                <form className='login__form' onSubmit={handleLogin}>
                    <div className='form__box--grid'>
                        <label className='form__label' htmlFor='emal'>Email:</label>
                        <input className='form__input' type='email' name='email' placeholder='john.doe@funkoshop.com'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form__box--grid'>
                        <label className='form__label' htmlFor='password'>Contraseña:</label>
                        <input className='form__input' type='password' name='password'
                            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='login__error'>
                        {error && (<p>{error}</p>)}                            
                    </div>
                    <div className='form__submission'>
                        <input
                            className='form__btn btn btn--primary btn--large'
                            type='submit'
                            value={isLoadingUser ? 'Ingresando...' : 'Ingresar'}
                            disabled={isLoadingUser}
                        />
                        <div className='form__remember'>
                            <input type='checkbox' name='remember' />
                            <label htmlFor=''>Recordarme</label>
                        </div>
                    </div>
                    <a className='form__link' href=''>
                        Olvidé mi contraseña
                    </a>
                </form>
            </Container>
        </main>
    )
}