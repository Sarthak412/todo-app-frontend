import React from 'react'

const Tasks = ({todo, deleteTask}) => {
  return (
    <tr key={todo.id}>
        <td className='text-left px-6 py-4 p-2 text-teal-950 font-sans whitespace-nowrap'>
            {todo.taskDescription}
        </td>
        <td className='text-teal-950'>
            {todo.taskType}
        </td>
        <td className='text-right px-6 py-6 p-2 text-teal-950 font-sans whitespace-nowrap space-x-4'>
            <a href='#' className='bg-teal-600 p-3 rounded text-white tracking-wider hover:bg-teal-800'>Edit Todo</a>
            <a onClick={(e, id)=> deleteTask(e, todo.id)} className='bg-green-600 p-3 rounded text-white tracking-wider hover:bg-green-800 hover:cursor-pointer'>Completed</a>
        </td>
    </tr>
  )
}

export default Tasks;