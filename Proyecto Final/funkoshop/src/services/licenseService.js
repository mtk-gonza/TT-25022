import { API_LICENSES } from './../config.js'
import { fetchData, fetchDataById, postData, putData, deleteDataById } from './fetchService.js'

export const getLicenses = async () => {
    try {
        const licenses = await fetchData(API_LICENSES)
        return licenses
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const getLicenseById = async (id) => {
    try {
        const license = await fetchDataById(API_LICENSES, id)
        return license
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const createLicense = async (licenseData) => {
    try {
        const newLicense = await postData(API_LICENSES, licenseData)        
        return newLicense
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const updateLicense = async (licenseData) => {
    try {
        const updatedLicense = await putData(API_LICENSES, licenseData)
        return updatedLicense
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const deleteLicense = async (id) => {
    try {
        const success = await deleteDataById(API_LICENSES, id)
        return success
    } catch (err) {
        console.error(err.message)
        throw err
    }
}