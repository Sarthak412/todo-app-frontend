import React, { useState } from 'react'

import TaskServices from '../services/TaskServices';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {

  const navigate = useNavigate();

  const[todo, setTodo] = useState({
    id: "",
    taskDescription:"",
    taskType:"",
  })

  // function to handle change
  const handleChange = (e) => {
    const value = e.target.value;
    setTodo({...todo, [e.target.name]:value});
  };

  // function to save task
  const saveTask = (e) => {
    e.preventDefault();
    TaskServices.addTask(todo).then((response) => {
      navigate("/");
      console.log(response);
    }).catch((err)=>{
      console.log(err);
    })
  };


  // Function to clear the fields
  const reset = (e) => {
    e.preventDefault();
    setTodo({
      taskDescription:"",
      taskType:"",
    });
  }

  return (
    <div className='flex w-fit mx-auto mt-[3.5rem] shadow-md rounded bg-teal-200'>
      <div className='px-8 py-8'>
        <div className='text-2xl font-extrabold text-teal-900 tracking-wider'>
          <h1>Add a To-do</h1>
        </div>
        <div className='items-center justify-center mb-5 w-full'>
          
          <label className='block text-teal-900 pt-5 mb-2 font-thin text-xl'>Task Description</label>
          <input 
            name='taskDescription' 
            value={todo.taskDescription}
            onChange={(e)=> handleChange(e)} 
            placeholder='Enter To-do' type='text' 
            className='h-10 w-96 px-2 py-2 rounded shadow'
            required 
          />

          <label className='block text-teal-900 pt-5 mb-2 text-xl font-thin'>Task Type</label>
          <input 
            name='taskType' 
            value={todo.taskType} 
            onChange={(e)=> handleChange(e)}
            placeholder='e.g. Programming, Course, Meetings' 
            type='text' 
            className='h-10 w-96 px-2 py-2 rounded shadow' 
            required
          />
          
        </div>

        <div className='items-center justify-center w-full space-x-4'>
          <button onClick={saveTask} className='rounded text-white bg-teal-700 px-3 py-3 tracking-wider shadow hover:bg-teal-800'>Add To-do</button>
          <button onClick={reset} className='rounded text-white bg-red-700 px-3 py-3 tracking-wider shadow hover:bg-red-800'>Clear</button>
        </div>

      </div>
    </div>
  )
}

export default AddTask;