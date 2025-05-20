import React, { createContext, useState, useEffect } from 'react'
import { login, logout } from './../services/authService.js'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoadingUser, setIsLoadingUser] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser)
                setUser(parsedUser)
                setIsAuthenticated(true)
            } catch (err) {
                console.error('Error al parsear usuario almacenado', err)
            }
        }
        setIsLoadingUser(false)
    }, [])

    const handleLogin = async (email, password, remember = false) => {
        try {
            const loggedInUser = await login(email, password)          
            setError(null)
            setUser(loggedInUser)
            setIsAuthenticated(true)
            if (remember) {
                localStorage.setItem('user', JSON.stringify(loggedInUser))
            } else {
                sessionStorage.setItem('user', JSON.stringify(loggedInUser))
            }
        } catch (err) {
            setError(err.message || 'Hubo un problema al iniciar sesión')
            throw err
        } finally {
            setIsLoadingUser(false)
        }
    }

    const handleLogout = () => {
        setUser(null)
        setIsAuthenticated(false)
        logout()
    }

    return (
        <AuthContext.Provider value={{ 
            user, 
            isAuthenticated, 
            isLoadingUser, 
            error, 
            setError, 
            login: handleLogin,
            logout: handleLogout 
        }}>
            {children}
        </AuthContext.Provider>
    )
}