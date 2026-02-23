import React from 'react'

const Unauthorized = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex p-5 justify-center px-4">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-xl max-h-100 w-full text-center">

                <h1 className="text-3xl font-semibold text-red-600 mb-6">
                    Unauthorized Access
                </h1>

                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                    <p>
                        You do not have permission to access this page.
                    </p>
                    <p>
                        Your current role does not allow viewing this content.
                    </p>
                    <p>
                        Please switch to an appropriate role from the navbar or contact the administrator.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Unauthorized