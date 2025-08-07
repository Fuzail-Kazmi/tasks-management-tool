import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='max-h-[100vh] h-[100vh] max-w-[100vw] mx-auto flex flex-col justify-center items-center gap-4'>
                <h1 className='text-2xl font-semibold'>Login</h1>
                <form className='space-y-2'>
                    <div className='grid grid-cols-1 gap-2'>
                        <input
                            className='border border-gray-200 rounded-lg py-1.5 px-3 text-gray-600 text-sm w-60'
                            type="text"
                            placeholder='Email'
                        />
                        <input
                            className='border border-gray-200 rounded-lg py-1.5 px-3 text-gray-600 text-sm w-60'
                            type="text"
                            placeholder='Password'
                        />
                        <button
                            className='border border-gray-200 rounded-lg py-1 px-2 text-gray-50 bg-blue-500 hover:bg-blue-600 text-sm'
                            type="text"
                            placeholder='Password'
                        >
                            Login
                        </button>
                    </div>
                    <div className='flex items-center justify-between gap-2 text-xs'>
                        <div>Don't have an account?</div>
                        <NavLink to='/signup' className='text-blue-500 hover:underline cursor-pointer'>Register</NavLink>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login