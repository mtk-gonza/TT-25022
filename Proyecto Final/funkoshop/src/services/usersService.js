import { API_USERS, API_ROLES } from './../config.js'
import { fetchData } from './fetchData.js'

export const getUsers = async () => {
    try {
        const [users, roles] = await Promise.all([
            fetchData(API_USERS),
            fetchData(API_ROLES)
        ])

        const rolesMap = Object.fromEntries(roles.map(r => [r.id, r]))

        const enrichedUsers = users.map(user => ({
            ...user,
            rol: rolesMap[user.rol_id],
        }))

        return { users: enrichedUsers, roles }
        
    } catch (error) {
        console.error('Error al obtener los datos:', error)
        throw error
    }
}