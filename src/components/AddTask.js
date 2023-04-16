import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import TaskServices from '../services/TaskServices'

const AddTask = () => {

  // const navigate = useNavigate();

  const [newtask, setTask] = useState({
    task: ""
  })

  const saveTask = (e) => {
    e.preventDefault();
    TaskServices.addTask(newtask).then((response)=> {
      console.log(response);
    }).catch((err)=>{
      console.log(err);
    });
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setTask({...newtask, [e.target.value]: value})
  }

  return (
    <div className='flex flex-col items-center justify-center px-5 py-10'>
        <div className='bg-white px-5 py-8 flex flex-col w-[450px] border rounded-md shadow-sm'>
            <h1 className='text-3xl font-extrabold pb-4 text-center'> Add Task </h1>

            <label className='text-xl pb-3'>Enter To-do</label>
            <input name='task' type='text' value={newtask.task} onChange={(e) => handleChange(e)} placeholder='Enter To-do' className='p-3 border' />

            <button onClick={saveTask} className='p-3 mt-6 bg-teal-600 text-white rounded-md font-bold hover:bg-teal-700'>Add To-do</button>
            <button className='p-3 mt-6 bg-red-600 text-white rounded-md font-bold hover:bg-red-800'>Clear Task</button>

        </div>
    </div>
  )
}

export default AddTask;