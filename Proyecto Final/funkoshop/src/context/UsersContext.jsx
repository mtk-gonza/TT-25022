import { createContext, useState, useEffect } from 'react'
import { API_URL } from './../config.js'

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
                const [usersRes, rolesRes] = await Promise.all([
                    fetch(`${API_URL}/users`),
                    fetch('/data/roles.json')
                ])

                const usersData = await usersRes.json()
                const rolesData = await rolesRes.json()

                const rolesMap = Object.fromEntries(rolesData.map(r => [r.id, r]))

                const enrichedUsers = usersData.map(user => ({
                    ...user,
                    rol: rolesMap[user.rol_id],
                }))

                setRoles(rolesMap)
                setUsers(enrichedUsers)
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
        <UsersContext.Provider value={{ users, roles, error, isLoading }}>
            {children}
        </UsersContext.Provider>
    )
}