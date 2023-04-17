import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TaskServices from '../services/TaskServices';
import Tasks from './Tasks';

const TaskList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
  
    const [todos, setTodos] = useState(true);


    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await TaskServices.getAllTasks();  
                setTodos(response.data);  
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);


    const deleteTask = (e, id) => {
        e.preventDefault(); 
        TaskServices.deleteTask(id).then((res)=>{
            if(todos){
                setTodos((prevElement)=>{
                    return prevElement.filter((todos)=> todos.id !== id);         
                });
            }
        })
    }

  return (
    <div className='text-left container mx-8 my-8'>
        <div className='h-12'>
            <button onClick={()=> navigate("/addTask")} className='bg-teal-600 w-[200px] rounded shadow text-lg hover:bg-teal-800 text-white p-3'> Add To-do </button>
        </div>
        
        {/* Task Table  */}
        <div className='flex shadow border-b mt-[2rem] w-[1200px]'>
            <table className='min-w-full'>
                <thead className='bg-teal-200'>
                    <tr>
                        <th className='text-left font-bold text-gray-600 uppercase tracking-wider py-3 px-6'> Task Description </th>
                        <th className='text-left font-bold text-gray-600 uppercase tracking-wider py-3 px-6'> Task Type </th>
                        <th className='text-right font-bold text-gray-600 uppercase tracking-wider py-3 px-6'> Actions </th>
                    </tr>
                </thead>            

                {!loading && (
                <tbody className='bg-teal-100'>
                    {todos.map((todo)=>(
                        <Tasks todo={todo} deleteTask={deleteTask} key={todo.id}></Tasks>
                    ))}
                </tbody>
                )}
            </table>
        </div>

    </div>
  )
}

export default TaskList