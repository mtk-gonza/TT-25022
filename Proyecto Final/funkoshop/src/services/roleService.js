import { API_ROLES } from './../config.js'
import { fetchData, fetchDataById, postData, putData, deleteDataById } from './fetchService.js'

export const getRoles = async () => {
    try {
        const roles = await fetchData(API_ROLES)
        return roles
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const getRoleById = async (id) => {
    try {
        const Rol = await fetchDataById(API_ROLES, id)
        return Rol
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const createRole = async (rolData) => {
    try {
        const newRol = await postData(API_ROLES, rolData)        
        return newRol
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const updateRole = async (rolData) => {
    try {
        const updatedRol = await putData(API_ROLES, rolData)
        return updatedRol
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const deleteRole = async (id) => {
    try {
        const success = await deleteDataById(API_ROLES, id)
        return success
    } catch (err) {
        console.error(err.message)
        throw err
    }
}