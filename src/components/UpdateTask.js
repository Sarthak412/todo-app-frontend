import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TaskServices from '../services/TaskServices';

const UpdateTask = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [todo, setTodo] = useState({
        id: id,
        taskDescription:"",
        taskType:"",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setTodo({...todo, [e.target.name]:value});
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await TaskServices.getTaskId(id);
                setTodo(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    
    const updateTask = (e) => {
        e.preventDefault();
        TaskServices.updateTask(todo, id).then((response) => {
            console.log(response);
            navigate("/taskList");  
        })
        .catch((err) => {
            console.log(err);
        });
    };

  return (
    <div className='flex w-fit mx-auto mt-[3.5rem] shadow-md rounded bg-teal-200'>
      <div className='px-8 py-8'>
        <div className='text-2xl font-extrabold text-teal-900 tracking-wider'>
          <h1>Update To-do</h1>
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
          <button 
            onClick={updateTask} 
            className='rounded text-white bg-teal-700 px-3 py-3 tracking-wider shadow hover:bg-teal-800'
          >
            Update To-do
          </button>
          <button 
            onClick={() => navigate('/taskList')} 
            className='rounded text-white bg-red-700 px-3 py-3 tracking-wider shadow hover:bg-red-800'
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  )
}

export default UpdateTask;