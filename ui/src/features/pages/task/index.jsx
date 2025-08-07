import React, { useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [sortDropdown, setSortDropdown] = useState(false)
  const [priorityDropdown, setpriorityDropdown] = useState(false)

  return (
    <div className='max-h-[100vh] h-[100vh] overflow-auto max-w-[100vw] p-2 md:p-4'>
      <div className='flex justify-between items-center pb-2 pl-8 md:pl-0 border-b border-gray-200'>
        <div className='text-2xl font-semibold text-gray-800'>Task #id</div>
        <button className='flex items-center gap-1 text-white bg-gray-800 py-1.5 px-2 rounded-md text-sm'><Plus className='h-4 w-4' />Add Task</button>
      </div>
      <div className='flex items-center gap-4 py-4'>
        <div onClick={() => setSortDropdown(!sortDropdown)} className='w-35 text-sm bg-white border border-gray-200 rounded-md py-0.5 px-2 flex items-center justify-between relative cursor-pointer'>
          <span className='whitespace-nowrap'>Sort By</span> <ChevronDown className='h-4 w-4' />

        </div>
        <div onClick={() => setpriorityDropdown(!priorityDropdown)} className='flex items-center gap-2 relative cursor-pointer'>
          <span className='whitespace-nowrap'>Priority</span> <ChevronDown className='h-4 w-4' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>

      </div>
    </div>
  )
}

export default Index