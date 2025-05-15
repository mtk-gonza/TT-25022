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
            setUser(JSON.parse(storedUser))
            setIsAuthenticated(true)
        }
        setIsLoadingUser(false)
    }, [])

    const login = async (email, password) => {
        try {
            setIsLoadingUser(true)
            setError(null)
            const response = await fetch(`${API_URL}/users?email=${email}&password=${password}`)
            if (response.status == 200) {
                setUser(response)
                setIsAuthenticated(true)
                localStorage.setItem('user', JSON.stringify(response))
                return response
            }
        } catch (err) {
            setError(err.message || 'Error al iniciar sesión')
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
        <AuthContext.Provider value={{ user, isAuthenticated, isLoadingUser, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}