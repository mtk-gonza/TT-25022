import React, { useState, useEffect } from 'react'

import { LicencesContext } from './../context/LicencesContext.jsx'

import { getLicences, getLicenceById, createLicence, updateLicence, deleteLicence } from './../services/licenceService.js'

export const LicencesProvider = ({ children }) => {
    const [licences, setLicences] = useState([])
    const [errorLicences, setErrorLicences] = useState(null)
    const [isLoadingLicences, setIsLoadingLicences] = useState(false)

    const actonsLicences = {
        getLicences: async () => {
            setErrorLicences(null)
            setIsLoadingLicences(true)
            try {
                const response = await getLicences()
                setLicences(response)
                return response
            } catch (err) {
                setErrorLicences(err.message)
                throw err
            } finally {
                setIsLoadingLicences(false)
            }
        },
        getLicenceById: async (id) => {
            setErrorLicences(null)
            setIsLoadingLicences(true)
            try {
                const response = await getLicenceById(id)
                return response
            } catch (err) {
                setErrorLicences(err.message)
                throw err
            } finally {
                setIsLoadingLicences(false)
            }            
        },
        addLicence: async (newLicence) => {
            setErrorLicences(null)
            setIsLoadingLicences(true)
            try {
                const response = await createLicence(newLicence)
                setLicences((prev) => [...prev, response])  
                return response               
            } catch (err) {
                setErrorLicences(err.message)
                throw err
            } finally {
                setIsLoadingLicences(false)
            }
        },
        updateLicence: async (updatedProduct) => {
            setErrorLicences(null)
            setIsLoadingLicences(true)
            try {                
                const response = await updateLicence(updatedProduct)
                setLicences((prev) =>
                    prev.map((p) => (p.id === response.id ? response : p))
                )
                return response
            } catch (err) {
                setErrorLicences(err.message)
                throw err               
            } finally {
                setIsLoadingLicences(false)
            }
        },
        deletLicence: async (id) => {
            setErrorLicences(null)
            setIsLoadingLicences(true)
            try {                
                const response = await deleteLicence(id);
                setLicences((prev) => prev.filter((p) => p.id !== id))
                return response || true 
            } catch (err) {
                setErrorLicences(err.message)
                throw err 
            } finally {
                setIsLoadingLicences(false)
            }
        }        
    }

    useEffect(() => {
        actonsLicences.getLicences()
    }, [])

    return (
        <LicencesContext.Provider value={{ 
            licences, 
            errorLicences, 
            isLoadingLicences,
            ...actonsLicences 
        }}>
            {children}
        </LicencesContext.Provider>
    )
}