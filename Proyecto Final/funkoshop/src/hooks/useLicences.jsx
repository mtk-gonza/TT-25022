import { useContext } from 'react'

import { LicencesContext } from './../context/LicencesContext.jsx'

export const useLicences = () => {
    return useContext(LicencesContext)
}