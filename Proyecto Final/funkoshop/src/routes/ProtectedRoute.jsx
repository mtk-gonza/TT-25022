import React from 'react'
import { Navigate } from 'react-router-dom'
import { Container } from './../components/Container.jsx'
import { Loading } from './../components/Loading.jsx'

import { useAuth } from './../hooks/useAuth.jsx'

export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoadingUser } = useAuth()

    if (isLoadingUser) {
        return <Container>
            <Loading />
        </Container>
    }
    return isAuthenticated ? children : <Navigate to="/login" />
}