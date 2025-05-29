import { API_URL } from './../config.js'
import { fetchData } from './fetchHelper.js'

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)


export const login = async (email, password) => {

    if (!email || !password) {
        throw new Error('Por favor, ingresa correo y contraseña')
    }

    if (!isValidEmail(email)) {
        throw new Error('El correo electrónico no tiene un formato válido')
    }
    try {
        const response = await fetch(`${API_URL}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
    
        if (response.status === 404) {
            throw new Error('Correo o contraseña incorrectos')
        }
    
        if (!response.ok) {
            throw new Error(`Error en la conexión: ${response.status} - ${response.statusText}`)
        }
        
        const users = await response.json()
        const roles = await fetchData('/data/roles.json')
        const rolesMap = Object.fromEntries(roles.map(r => [r.id, r]))
        const user = users[0]
        const userWithRole = {
            ...user,
            role: rolesMap[user.rol_id] || { name: 'Sin rol' }
        }
    
        return userWithRole 
               
    } catch (err) {
        console.error('Error durante el login:', err)
        throw err
    }
}

export const logout = () => {
    localStorage.removeItem('user')
    sessionStorage.removeItem('user')
}