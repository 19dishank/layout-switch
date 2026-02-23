import React from 'react'

const Admin = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex p-5 justify-center px-4">
            <div className="bg-white shadow-md rounded-lg max-h-fit p-8 max-w-xl w-full">

                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Admin Component
                </h1>

                <div className="space-y-3 text-gray-600 text-base leading-relaxed ">
                    <p>Example of role based access control</p>
                    <p>Try selecting roles from navbar and then navigate through links</p>
                    <p>With the <span className='text-indigo-700 font-bold'>Admin</span> role you can access <span className='text-indigo-700 font-bold'>all the pages</span> </p>
                    <p>With the <span className='text-indigo-700 font-bold'>User</span> role you can access <span className='text-indigo-700 font-bold'>User, Guest pages</span></p>
                    <p>With the <span className='text-indigo-700 font-bold'>Guest</span> role you can access <span className='text-indigo-700 font-bold'>only Guest page</span></p>
                </div>

            </div>
        </div>
    )
}

export default Admin