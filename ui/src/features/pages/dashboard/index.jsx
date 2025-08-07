import React, { useState } from 'react'
import { AlarmClockCheck, CalendarClock, ChevronDown, Circle, CircleOff, LogOut, Moon, Pencil, Plus, Settings, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate();
  const [sortDropdown, setSortDropdown] = useState(false)
  const [priorityDropdown, setpriorityDropdown] = useState(false)
  const [headDropDown, setHeadDropDown] = useState(false)

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

  const task = [
    {
      id: '1',
      title: 'this was a',
      task: 'Hello i am going outside',
      date: '12-10-2025',
      priority: 'Medium'
    },
    {
      id: '2',
      title: 'this is a ',
      task: 'i am going and meet with the babu bhai fasfafsfasfaffsaffafafsafa',
      date: '14-11-2025',
      priority: 'Easy'
    },
    {
      id: '3',
      title: 'this is the',
      task: 'i am relaxe and take a deep breath',
      date: '5-10-2025',
      priority: 'Hard'
    }
  ]

  return (
    <div className='max-h-[100vh] h-[100vh] overflow-auto max-w-[100vw] p-2 md:p-4'>
      <div className='flex justify-between items-center pb-2 pl-8 md:pl-0 border-b border-gray-200'>
        <div className='text-2xl font-semibold text-gray-800'>Task List</div>
        <div className='flex gap-2'>
          <div className='bg-red-300 rounded-4xl h-10 w-10'></div>
          <div className='flex items-center gap-2'>
            <div className='text-xs'>
              <div>name</div>
              <div className='flex items-center gap-2'>
                <div className=''>title</div>
                <div onClick={() => setHeadDropDown(!headDropDown)} className='p-0.5 bg-gray-200 cursor-pointer rounded-4xl relative'>
                  <ChevronDown className='h-3 w-3' />
                  {headDropDown && (
                    <>
                      <div className=' py-1 px-2 bg-white border border-gray-200 rounded-lg absolute z-30 top-6 right-0'>
                        <div className='flex items-center gap-2 whitespace-nowrap p-2'><Moon className='h-4 w-4' />Toggle Theme</div>
                        <div className='flex items-center gap-2 whitespace-nowrap p-2'><Settings className='h-4 w-4' />Setting</div>
                        <div className='flex items-center gap-2 whitespace-nowrap p-2'><LogOut className='h-4 w-4' />Log out</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-4 py-4'>
        <div onClick={() => setSortDropdown(!sortDropdown)} className='w-35 text-sm bg-white border border-gray-200 rounded-md py-0.5 px-2 flex items-center justify-between relative cursor-pointer'>
          <span className='whitespace-nowrap'>Sort By</span> <ChevronDown className='h-4 w-4' />
          {sortDropdown && (
            <>
              <ul className='bg-white border border-gray-200 rounded-lg absolute z-30 top-6 left-0 w-35'>
                {sortby.map((item, idx) => (
                  <li
                    key={idx}
                    className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 text-sm w-29'
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
                    className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700 text-sm'
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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        {task.map((task, id) => (
          <div onClick={() => navigate(`/${task.id}`)} key={id} className='flex justify-between gap-2 p-4 border border-gray-200 rounded-lg'>
            <div className='flex flex-col justify-between gap-2 max-w-60'>
              <div className='flex flex-col gap-2'>
                <div className='whitespace-pre-wrap text-xs text-gray-600'>{task.title}</div>
                <div className='whitespace-pre-wrap text-sm'>{task.task}</div>
              </div>
              <div className='text-xs text-gray-600'>{task.date}</div>
            </div>
            <div className='flex flex-col items-center justify-between text-xs'>
              <div>Work</div>
              <div>{task.priority}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index