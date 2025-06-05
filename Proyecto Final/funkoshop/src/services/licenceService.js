import { API_LICENCES } from './../config.js'
import { fetchData, fetchDataById, postData, putData, deleteDataById } from './fetchService.js'

export const getLicences = async () => {
    try {
        const licences = await fetchData(API_LICENCES)
        return licences
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const getLicenceById = async (id) => {
    try {
        const licence = await fetchDataById(API_LICENCES, id)
        return licence
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const createLicence = async (licenceData) => {
    try {
        const newLicence = await postData(API_LICENCES, licenceData)        
        return newLicence
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const updateLicence = async (licenceData) => {
    try {
        const updatedLicence = await putData(API_LICENCES, licenceData)
        return updatedLicence
    } catch (err) {
        console.error(err.message)
        throw err
    }
}

export const deleteLicence = async (id) => {
    try {
        const success = await deleteDataById(API_LICENCES, id)
        return success
    } catch (err) {
        console.error(err.message)
        throw err
    }
}