import React from 'react'
import { Outlet } from 'react-router-dom'
const Sidebar = React.lazy(() => import('@/components/layout/sidebar'))

const Index = () => {
    return (
        <>
            <div className='flex'>
                <div className='border-r border-gray-100'><Sidebar/></div>
                <div className='flex-9/12 bg-gray-50 overflow-auto'><Outlet/></div>
            </div>
        </>
    )
}

export default Index