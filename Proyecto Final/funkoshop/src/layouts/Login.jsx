import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from './../components/Container.jsx'
import { AuthContext } from './../context/AuthContext.jsx'

import './../styles/Login.css'

export const Login = () => { 
    const [credentials, setCredentials] = useState({ username: '', password: '' })

    const { login, isLoadingUser, error, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const respose = await login(credentials.username, credentials.password)
        console.log(respose)
        console.log(error)
        if (!error) {
            navigate('/dashboard')
        }
        else {
            alert(error)
        }
    }

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
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        />
                    </div>
                    <div className='form__box--grid'>
                        <label className='form__label' htmlFor='password'>Contraseña:</label>
                        <input className='form__input' type='password' name='password'
                            placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        />
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