import { useState } from 'react'

const apiUrl = 'http://localhost:3000/api'

import './../styles/Register.css'

export const Register = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${apiUrl}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, lastname, email, password }),
            })
            if (response.ok) {
                console.log('usuario creado correctamente');
            } else {
                console.error('Error de inicio de sesión');
            }
        } catch (error) {
            console.error('Error de red:', error)
        }
    }

    return (
        <main id="register" className="container">
            <div className="register__header">
                <h2 className="register__title">CREA TU CUENTA</h2>
                <p className="register__subtitle">Completa el formulario para ser parte del mundo de los Funkos</p>
            </div>
            <form className="register__form" action="/register" method="POST" onSubmit={handleSubmit}>
                <div className="form__box--grid">
                    <label className="form__label" htmlFor="name">Nombre:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John"
                        required
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form__box--grid">
                    <label className="form__label" htmlFor="lastname">Apellido:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder="Doe"
                        required
                        value={lastname} onChange={(e) => setLastname(e.target.value)}
                    />
                </div>
                <div className="form__box--grid">
                    <label className="form__label" htmlFor="email">Email:</label>
                    <input
                        className="form__input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="johndoe@email.com"
                        required
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form__box--grid">
                    <label className="form__label" htmlFor="password">Contraseña:</label>
                    <input
                        className="form__input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        required
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form__box--grid">
                    <label className="form__label" htmlFor="repassword">Repite Contraseña:</label>
                    <input
                        className="form__input"
                        type="password"
                        name="repassword"
                        id="password"
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                        required
                    />
                </div>
                <div className="form__submission">
                    <input
                        className="form__btn btn btn--primary btn--large"
                        type="submit"
                        value="Registrar"
                    />
                    <div className="form__terms">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Acepto <a className="form__link" href="">Términos y Condiciones</a></label>
                    </div>
                </div>
            </form>
        </main>
    )
}