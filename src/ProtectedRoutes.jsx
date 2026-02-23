import React, { useContext } from 'react'
import { AuthContext } from './context/authProvider'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children, roles }) => {
    const [role, isAuthorised] = useContext(AuthContext)

    if (!roles.includes(role)) {
        return <Navigate to="/login" />

    }
    if (!isAuthorised) {
        return <Navigate to='/unAuthorized' />
    }
    return children;
}

export default ProtectedRoutes
