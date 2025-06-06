import React, { useState, useEffect } from 'react'

import { LicencesContext } from './../context/LicencesContext.jsx'

import { getLicences } from './../services/licenceService.js'

export const LicencesProvider = ({ children }) => {
    const [licences, setLicences] = useState([])
    const [errorLicences, setErrorLicences] = useState(null)
    const [isLoadingLicences, setIsLoadingLicences] = useState(false)

    const loadLicences = async () => {
        setIsLoadingLicences(true)
        try {
            const response = await getLicences()
            setLicences(response)
        } catch (err) {
            setErrorLicences(err.message || 'No se pudieron cargar los productos')
            console.error('Error al cargar los datos:', err)
            console.log(errorLicences)
        } finally {
            setIsLoadingLicences(false)
        }
    }

    useEffect(() => {
        loadLicences()
    }, [])

    return (
        <LicencesContext.Provider value={{ 
            licences, 
            errorLicences, 
            loadLicences,
            isLoadingLicences 
        }}>
            {children}
        </LicencesContext.Provider>
    )
}