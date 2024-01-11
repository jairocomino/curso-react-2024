import React, { useState } from "react";
import idGenerator from "../../helpers/idGenerator";

const initialState = [
  {
    id: 1,
    title: "comprar pan",
    completed: false,
  },
  {
    id: 2,
    title: "pasear al perro",
    completed: true,
  },
  {
    id: 3,
    title: "aprender React",
    completed: false,
  },
];

const TodoListTailwind = () => {
    //ESTADOS ____ HOOSK
  const [tasks, setTasks] = useState(initialState);
  const [newtask, setNewTask] = useState("");

  //Logica
  function handleAddTask() {
    const newId=idGenerator();
    if (newtask.trim() !== "") {
        const newtaskObjet={
            id: newId,
            title: newtask.trim(),
            completed: false,
        }
        setTasks([...tasks,newtaskObjet]);
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
//resultado
  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 bg-yellow-50 shadow-md rounded-md">
        <h1 className="text-2x1 mb-4 font-bold uppercase">Todo List</h1>
        <div className=" flex mb-4">
          <input
            type="text"
            placeholder="Nueba Tarea"
            value={newtask}
            onChange={(e=>setNewTask(e.target.value))}
            //onKeyDown={}
            className=" flex-1 mr-2 p2 border rounded-md focus: outline-none border-blue-500"
          />
        </div>
        <button
          type="submit" onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-bd hover:bg-blue-800"
        >Añadir</button>
        <div>
          <ul>
           
            {
                tasks.map(task=>(
                <li key={task.id} className="flex items-center mb-2">
                    <input type="checkbox"onChange={()=>handleToggleCompleted(task.id)}
                     className="mr-2 " checked={task.completed}/>
                    <samp className={task.completed?"line-through":""}>{task.title}</samp>  
                    <button type="button"  onClick={()=>handleRemoveTask(task.id)}
                     className="ml-auto bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-500 " >Eliminar</button>                  
                </li>))     
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoListTailwind;
