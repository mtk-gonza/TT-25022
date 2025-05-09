import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const mySwal = withReactContent(Swal);
import { useCombinedContexts } from './../../hooks/useCombineContexs.js';
import { loginAPI, setAuthToken } from './../../services/authService.js';

import './../styles/Login.css'

export const Login = () => { 
    const { setIsAuthenticated, login } = useCombinedContexts();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    const from = location.state?.from || '/dashboard';

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!credentials.username || !credentials.password) {
            setError('Por favor, ingresa tu usuario y contraseña.');
            mySwal.fire({
                title: 'Error',
                text: 'Por favor, ingresa tu usuario y contraseña.',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
            });
            return;
        }
        setLoading(true);
        setError('');
        try {
            const { access_token } = await loginAPI(credentials);
            setAuthToken(access_token);
            localStorage.setItem('access_token', access_token);
            setIsAuthenticated(true);
            login(access_token, from)
            
        } catch (err) {
            setError(`Error en el inicio de sesión: ${err.message || 'Inténtalo nuevamente.'}`);
            console.error(error);
            setLoading(false);
            mySwal.fire({
                title: 'Error',
                text: err.message || 'Ocurrió un error al iniciar sesión. Inténtalo nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        }
    };

    return (
        <main id="login" className="container">
            <div className="login__header">
                <h2 className="login__title">INGRESAR A MI CUENTA</h2>
                <p className="login__subtitle">Para obtener novedades</p>
            </div>
            <form className="login__form" onSubmit={handleLogin}>
                <div className="form__box--grid">
                    <label className="form__label" htmlFor="username">Usuario:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="johndoe"
                        onChange={(e) =>
                            setCredentials({ ...credentials, username: e.target.value }) &&
                            setError('')
                        }
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
                        onChange={(e) =>
                            setCredentials({ ...credentials, password: e.target.value }) &&
                            setError('')
                        }
                    />
                </div>
                <div className="form__submission">
                    <input
                        className="form__btn btn btn--primary btn--large"
                        type="submit"
                        value={loading ? 'Ingresando...' : 'Ingresar'}
                        disabled={loading}
                    />
                    <div className="form__remember">
                        <input type="checkbox" name="remember" id="" />
                        <label htmlFor="">Recordarme</label>
                    </div>
                </div>
                <a className="form__link" href="">
                    Olvidé mi contraseña
                </a>
            </form>
        </main>
    );
};