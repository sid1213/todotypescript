import React, { useEffect, useState } from 'react';
import {myListState as props} from "../App";
import {myInputState as iprops} from "../App";

 interface myprop{
  myTask: props["myTask"];
  setTask:React.Dispatch<React.SetStateAction<props["myTask"]>>;
  input:iprops["myInput"];
  setInput:React.Dispatch<React.SetStateAction<iprops["myInput"]>>;
}

const  AddTodo:React.FC<myprop> = ( {myTask,setTask,input,setInput} )=> {

// const [input,setInput]= useState({
//     task:"",
//     description:""
// })
const getInput=(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
    setInput({
        ...input,
        [e.target.name]:e.target.value
    })
}
const insertTodo= ():void=>{
    if(input.task==""||input.description==""){
        alert("please add Both Input");
        return
    }
    setTask([...myTask,{task:input.task,
    description:input.description}]);
    input.task="";
    input.description="";

}
useEffect(()=>{
    localStorage.setItem("Tasks", JSON.stringify(myTask));
},[myTask]);
  return (
    <div>
      <input
            type="text"
            placeholder="Enter Task title"
            className="p-3 w-full border border-blue-700 rounded mt-2 bg-blue-950  placeholder:text-gray-300"
            value={input.task}
            onChange={getInput}
            name="task"
        />
        <textarea
          placeholder="Description"
          className="p-3 border border-blue-700 rounded mt-2 bg-blue-950 w-full placeholder:text-gray-300"
          value={input.description}
          onChange={getInput}
          name="description"
        />
        <button
          className="bg-green-900 active:bg-green-700 mt-5 p-3 w-fit rounded "
          onClick={insertTodo}
        >
          ADD TODO
        </button>
    </div>
  )
}

export default AddTodo;
