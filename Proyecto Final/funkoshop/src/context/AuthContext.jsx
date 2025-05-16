import React, { createContext, useState, useEffect } from 'react'
import { API_URL } from './../config.js'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoadingUser, setIsLoadingUser] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser)
            setUser(parsedUser)
            setIsAuthenticated(true)
        }
        setIsLoadingUser(false)
    }, [])

    const login = async (email, password) => {
        if (!email || !password) {
            setError('Por favor, ingresa correo y contraseña')
            return
        }
        try {
            setIsLoadingUser(true)
            setError(null)
            const response = await fetch(`${API_URL}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
            if (!response.ok) {
                throw new Error('Error en la conexión')
            }
            const users = await response.json()
            if (users.length === 0) {
                setError('Correo o contraseña incorrectos')
                return
            }
            const loggedInUser = users[0]
            setUser(loggedInUser)
            setIsAuthenticated(true)
            localStorage.setItem('user', JSON.stringify(loggedInUser))
        } catch (err) {
            setError(err.message || 'Hubo un problema al iniciar sesión')
        } finally {
            setIsLoadingUser(false)
        }
    }

    const logout = () => {
        setUser(null)
        setIsAuthenticated(false)
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoadingUser, error, setError, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}