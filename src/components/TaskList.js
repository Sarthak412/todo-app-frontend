import React from 'react'
import { useNavigate } from 'react-router-dom'

const TaskList = () => {

  const navigate = useNavigate();

  return (
    <div className='text-left container mx-8 my-8'>
        <div className='h-12'>
            <button onClick={()=> navigate('/createTodo')} className='bg-teal-600 w-[200px] rounded shadow text-lg hover:bg-teal-800 text-white p-3'> Add To-do </button>
        </div>
        
        {/* Task Table  */}
        <div className='flex shadow border-b mt-[2rem]'>
            <table className='min-w-full'>
            <thead className='bg-gray-50 sm:w-fit'>
                <tr>
                    <th className='text-left font-medium text-gray-600 uppercase tracking-wider py-3 px-6'> Task Description </th>
                </tr>
            </thead>
            
            </table>
        </div>

    </div>
  )
}

export default TaskList