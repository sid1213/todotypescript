import React from "react";
import {InputState as props } from "../App"

 interface thisprop{
    myTask: props["myTask"];
    setTask:React.Dispatch<React.SetStateAction<props["myTask"]>>
  }


const Task: React.FC<thisprop> = ({ myTask,setTask}) => {
    
const deleteTask = (e:React.MouseEvent<HTMLButtonElement>)=>{
    const eventTarget = e.target as HTMLElement;
    const index =Number(eventTarget.parentElement?.getAttribute("data-key"));
    // localStorage.removeItem("Tasks"[0]);
    console.log(myTask)
    console.log(JSON.parse(localStorage.getItem("Tasks")|| "")[index])
    

}

  return (
  
  <ul className="w-full">

    {
        myTask.map( (tasks,index)=>{
            
            return <li className="bg-purple-300  my-2 border border-red-700 flex justify-between text-start gap-5 p-5 " data-key={index} key={index}>
            <div>
                <p className=" font-bold text-red-700">{tasks.task}</p>
                <p className="text-xs">{tasks.description} </p>
            </div>
            <button className="text-blue-700 hover:text-blue-500">Edit</button>
            <button className="text-red-800 hover:text-red-500" onClick={deleteTask}>Delete</button>

        </li>
        })
    }
    
  </ul>
    
  );
};
export default Task;
