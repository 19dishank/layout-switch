import { Children, createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const rolesArr = ["admin", "guest", "user"]
    const [isAuthorised, setIsAuthorised] = useState(true)
    const [role, setRole] = useState('guest')
    // const role = 'user';
    // const isAuthorised = true

    return <AuthContext.Provider value={[role, isAuthorised, setRole, setIsAuthorised]}>
        {children}
    </AuthContext.Provider>
}