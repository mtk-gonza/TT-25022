import { createContext, useState, useEffect } from 'react'
import { getUsers } from './../services/userService.js'

export const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [roles, setRoles] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true)
            try {
                const data = await getUsers()
                setRoles(data.roles)
                setUsers(data.users)
            } catch (err) {
                setError(err)
                console.error('Error al cargar los datos:', err)
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        loadData()
    }, [])

    return (
        <UsersContext.Provider value={{ 
            users, 
            roles, 
            error, 
            isLoading 
        }}>
            {children}
        </UsersContext.Provider>
    )
}