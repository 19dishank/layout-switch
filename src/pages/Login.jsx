import React from 'react'

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex p-5 justify-center px-4">
            <div className="bg-white shadow-md rounded-lg max-h-100 p-8 max-w-xl w-full text-center">

                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Login Page
                </h1>

                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                    <p>
                        You are not logged in.
                    </p>
                    <p>
                        To access protected pages, please select a role from the navbar and log in.
                    </p>
                    <p>
                        After logging in, you will be able to navigate based on your assigned role permissions.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Login