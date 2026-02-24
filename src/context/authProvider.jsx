import { Children, createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthorised, setIsAuthorised] = useState(true)
    const [role, setRole] = useState('guest')

    // use objet to pass values it will be easy to destructing needed values 
    return <AuthContext.Provider value={[role, isAuthorised, setRole, setIsAuthorised]}>
        {children}
    </AuthContext.Provider>
}