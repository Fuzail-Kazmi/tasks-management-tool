import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Plus,
  AlarmClockCheck,
  CalendarClock,
  Circle,
} from 'lucide-react'


const Index = () => {
  const navigate = useNavigate();
  const [sortDropdown, setSortDropdown] = useState(false)
  const [priorityDropdown, setpriorityDropdown] = useState(false)

  const sortby = [
    { icon: <Circle className='fill-gray-500 stroke-0 h-4 w-4' />, label: 'All' },
    { icon: <Circle className='fill-red-400 stroke-0 h-4 w-4' />, label: 'Newest' },
    { icon: <Circle className='fill-yellow-600 stroke-0 h-4 w-4' />, label: 'Oldest' },
    { icon: <CalendarClock className='text-yellow-500 h-4 w-4' />, label: 'Pending' },
    { icon: <AlarmClockCheck className='text-green-500 h-4 w-4' />, label: 'Complete' },
  ]

  const priority = [
    { icon: <Circle className='fill-green-500 stroke-0 h-4 w-4' />, label: 'Easy' },
    { icon: <Circle className='fill-yellow-500 stroke-0 h-4 w-4' />, label: 'Medium' },
    { icon: <Circle className='fill-red-500 stroke-0 h-4 w-4' />, label: 'Hard' },
  ]

  return (
    <div className='max-h-[100vh] h-[100vh] overflow-auto max-w-[100vw] p-2 md:p-4'>
      <div className='flex justify-between items-center pb-2 pl-8 md:pl-0 border-b border-gray-200'>
        <div className='text-2xl font-semibold text-gray-800'>Task #id</div>
        <button className='flex items-center gap-1 text-white bg-gray-800 py-1.5 px-2 rounded-md text-sm'><Plus className='h-4 w-4' />Add Task</button>
      </div>
      <div className='flex items-center gap-4 py-4'>
        <div onClick={() => setSortDropdown(!sortDropdown)} className='w-35 text-sm bg-white border border-gray-200 rounded-md py-0.5 px-2 flex items-center justify-between relative cursor-pointer'>
          <span className='whitespace-nowrap'>Sort By</span> <ChevronDown className='h-4 w-4' />
          {sortDropdown && (
            <>
              <ul className='bg-white border border-gray-200 rounded-lg absolute z-30 top-6.5 left-0 w-35'>
                {sortby.map((item, idx) => (
                  <li
                    key={idx}
                    className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 text-sm'
                  >
                    {item.icon}
                    {item.label}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div onClick={() => setpriorityDropdown(!priorityDropdown)} className='flex items-center gap-2 relative cursor-pointer'>
          <span className='whitespace-nowrap'>Priority</span> <ChevronDown className='h-4 w-4' />
          {priorityDropdown && (
            <>
              <ul className='bg-white border border-gray-200 rounded-lg absolute z-30 top-6 left-0'>
                {priority.map((item, idx) => (
                  <li
                    key={idx}
                    className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 text-sm'
                  >
                    {item.icon}
                    {item.label}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default Index