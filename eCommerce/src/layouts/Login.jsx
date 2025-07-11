import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Main } from './../components/Main.jsx'
import { Container } from './../components/Container.jsx'

import { useAuth } from './../hooks/useAuth.jsx'

import './../styles/Login.css'

export const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [remember, setRemember] = useState(false)

    const { login, isLoadingUser, error, setError } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials((prev) => ({ ...prev, [name]: value }))

        if (error) {
            setError(null)
        }
    }

    const handleRememberChange = (e) => {
        setRemember(e.target.checked)
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {           
            await login(credentials.email, credentials.password, remember)
            const from = location.state?.from || '/'
            navigate(from, { replace: true })
        } catch (err) {
            console.error('Error al iniciar sesión', err)
        }
    }

    return (
        <Main className='login'>
            <Container>
                <div className='login__content'>
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
                        <div className='form__actions'>
                            <a className='form__link' href=''>
                                Olvidé mi contraseña
                            </a>
                            <div className='form__submission'>
                                <input
                                    className='form__btn btn btn--primary btn--large'
                                    type='submit'
                                    value={isLoadingUser ? 'Ingresando...' : 'Ingresar'}
                                    disabled={isLoadingUser}
                                />
                                <div className='form__remember'>
                                    <input type='checkbox' name='remember' checked={remember} onChange={handleRememberChange}/>
                                    <label htmlFor=''>Recordarme</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>
        </Main>
    )
}