import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/authProvider'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [role, isAuthorised, setRole, setIsAuthorised] = useContext(AuthContext)

    const rolesArr = ["admin", "guest", "user"]

    const activeStyles = ({ isActive }) =>
        isActive
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-700 hover:text-blue-600"

    return (
        <nav className="bg-white shadow-md w-full border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">


                    <div className="shrink-0 flex items-center">
                        <div className="relative">
                            <label htmlFor="role-select" className="mr-5 text-gray-500">
                                Select Role
                            </label>

                            <select
                                id="role-select"
                                onChange={(e) => setRole(e.target.value)}
                                value={role}
                                className="appearance-none bg-transparent pr-8 py-1 text-lg font-black text-blue-600 cursor-pointer focus:outline-none uppercase tracking-tighter"
                            >
                                {rolesArr.map((curRole, idx) => (
                                    <option
                                        value={curRole}
                                        key={idx}
                                        className="text-gray-800 normal-case"
                                    >
                                        {curRole}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-blue-600"> <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /> </svg> </div>
                        </div>
                    </div>


                    <div className="hidden md:flex space-x-8">
                        <NavLink to="/" className={activeStyles}>
                            Guest
                        </NavLink>

                        <NavLink to="/user" className={activeStyles}>
                            User
                        </NavLink>

                        <NavLink to="/admin" className={activeStyles}>
                            Admin
                        </NavLink>
                    </div>


                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-blue-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header