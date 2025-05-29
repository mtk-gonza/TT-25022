import { API_URL } from './../config.js'
import { fetchData } from './fetchHelper.js'

export const getUsers = async () => {
    try {
        const [users, roles] = await Promise.all([
            fetchData(`${API_URL}/users`),
            fetchData('/data/roles.json')
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