import React, { useState } from 'react'
import { LayoutDashboard, LogOut, Menu, Users, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom'



const Sidebar = () => {
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(false);

  const menuItems = [
    { icon: <LayoutDashboard className="h-4 md:h-5 w-4 md:w-5" />, label: 'Dashboard', onClick: () => navigate('/') },
    { icon: <Users className="h-4 md:h-5 w-4 md:w-5" />, label: 'Profile', onClick: () => navigate('/profile') },
    { icon: <LogOut className="h-4 md:h-5 w-4 md:w-5" />, label: 'Logout', onClick: () => navigate('/login') },
  ];

  return (
    <>
      <div className='md:flex flex-col gap-8 bg-gray-800 h-[100vh] w-55 md:w-65 p-2 md:p-4 text-white hidden'>
        <h1 className='text-xl font-semibold px-3 py-2 hidden md:block'>Task Manager</h1>
        <div>
          <ul className="space-y-3 text-sm">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                onClick={item.onClick}
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${item.onClick ? 'cursor-pointer' : ''
                  } hover:bg-gray-700 ${item.active ? 'bg-gray-50' : ''
                  }`}
              >
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {!collapse ? <div className='absolute z-20 top-3.5 left-2 text-gray-800' onClick={() => setCollapse(!collapse)}><Menu className='h-6 w-6 cursor-pointer'/></div> : <div className='hidden'><Menu /></div>}
      {collapse && (
        <>
          <div className='flex flex-col gap-8 bg-gray-800 h-[100vh] w-55 md:w-65 p-2 md:p-4 text-white absolute z-20'>

            <h1 className='text-xl font-semibold px-3 py-2 hidden md:block'>Task Manager</h1>
            <h1
              onClick={() => setCollapse(!collapse)}
              className='text-lg font-semibold px-3 py-2 md:hidden flex items-center justify-between'
            >
              Task Manager
              <X className='h-5 w-5' />
            </h1>
            <div>
              <ul className="space-y-3 text-sm">
                {menuItems.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={item.onClick}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md ${item.onClick ? 'cursor-pointer' : ''
                      } hover:bg-gray-700 ${item.active ? 'bg-gray-50' : ''
                      }`}
                  >
                    {item.icon}
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Sidebar