import { useState, useEffect } from 'react'

import { RolesContext } from './../context/RolesContext.jsx'

import { getRoles } from './../services/roleService.js'

export const RolesProvider = ({ children }) => {
    const [roles, setRoles] = useState([])
    const [errorRoles, setErrorRoles] = useState(null)
    const [isLoadingRoles, setIsLoadingRoles] = useState(false)

    const loadRoles = async () => {
        setIsLoadingRoles(true)
        try {
            const response = await getRoles()
            setRoles(response)
        } catch (err) {
            setErrorRoles(err)
            console.error('Error al cargar los datos:', err)
            console.log(errorRoles)         
        } finally {
            setIsLoadingRoles(false)
        }
    }

    useEffect(() => {
        loadRoles()
    }, [])

    return (
        <RolesContext.Provider value={{
            roles,
            errorRoles,
            loadRoles,
            isLoadingRoles
        }}>
            {children}
        </RolesContext.Provider> 
    )
}