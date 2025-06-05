import { API_USERS, API_ROLES } from '../config.js'
import { fetchData, fetchDataById, postData, putData, deleteDataById } from './fetchService.js'

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

    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const getUserById = async (id) => {
    try {
        const user = await fetchDataById(API_USERS, id)
        const role = await fetchDataById(API_ROLES, user.rol_id)

        return {
            ...user,
            rol: role || null
        }

    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const createUser = async (userData) => {
    try {
        const newUser = await postData(API_USERS, userData)        
        return newUser
    } catch (err) {
        console.error('Error al crear usuario:', err.message)
        throw err
    }
}

export const updateUser = async (userData) => {
    try {
        const updatedUser = await putData(API_USERS, userData)
        return updatedUser
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const deleteUser = async (id) => {
    try {
        const success = await deleteDataById(API_USERS, id)
        return success
    } catch (err) {
        console.error(err.message)
        throw err
    }
}