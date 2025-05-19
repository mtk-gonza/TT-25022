import React from 'react'
import { Navigate } from 'react-router-dom'
import { Container } from './../components/Container.jsx'
import { Loading } from './../components/Loading.jsx'
import { useAuth } from './../hooks/useAuth.jsx'

export const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isAuthenticated, isLoadingUser, user } = useAuth()

    if (isLoadingUser) {
        return (
            <Container>
                <Loading />
            </Container>
        )
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    if (!allowedRoles || !Array.isArray(allowedRoles)) {
        return children
    }

    const userRole = user?.role?.name

    if (!userRole || !allowedRoles.includes(userRole)) {
        return <Navigate to='/unauthorized' />
    }

    return children
}