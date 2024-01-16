import React, { useState } from 'react'
import idGenerator from '../helper/idGenerator'

const initialState = [
    {
        id:1,
        title: "comprar pan",
        completed: true
    },
    {
        id:2,
        title: "pasear al perro",
        completed: true
    },
    {
        id:3,
        title: "aprender react",
        completed: false
    }
]

const TodoListTailWind = () => {
 
const [newTask, setNewTask] = useState("")
const [tasks, setTasks] = useState(initialState)

const newId = idGenerator();
function handleAddTask(){
    if(newTask.trim() !== ""){
        const newTaskObject={
            id:newId,
            title: newTask.trim(),
            completed: false
        }
        setTasks([...tasks, newTaskObject]);
    setNewTask("");
    }
    
}
function handleRemoveTask(taskId){
    const updateTasks = tasks.filter(task=> task.id !==taskId)
    setTasks(updateTasks);
}
function handleToggleCompleted(taskid) {
    //cada vez que hacemos clik cambia el estado
    //modifica el estado
    const updateTasks=tasks.map((task)=>(
        task.id===taskid ? {...task,completed:!task.completed}: task
    ));
    setTasks(updateTasks);
}

  return (
    <div className='max-w-md mx-auto mt-8 p-6 bg-yellow-200 shadow-md rounded-md'>
        <h1 className='text-2xl mb-4 font-bold uppercase text-center'>TodoList</h1>
        <div className='flex mb-4'>
            <input type='text' placeholder='nueva tarea'
            className='flex-1 mr-2 p2 border rounded-md focus:outline-none focus:border-blue-500'
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
            //onKeyDown={}
            ></input>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800'
            onClick={handleAddTask}
            >agregar tarea</button>
        </div>
    <div>
        <ul>
            {
                tasks.map(task =>(
                    <li key={task.id} className='flex items-center mb-2'>
                        <input type='checkbox'
                        className='mr-2'
                        checked={task.completed}
                        onChange={()=>handleToggleCompleted(task.id)}
                        />
                        <span className={task.completed ? "line-through": ""}>{task.title}</span>
                        <button className='ml-auto bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800'
                        onClick={()=>handleRemoveTask(task.id)}
                        >Borrar</button>
                    </li>
                ))
            }
        </ul>
    </div>
    </div>
  )
}

export default TodoListTailWind