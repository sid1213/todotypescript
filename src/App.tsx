import React, {  useState } from "react";
import Task from "./components/Task";
import AddTodo from './components/AddTodo';
import "./App.css";
export interface myListState{
  myTask:{
    task:string,
    description: string
  }[]
}
export interface myInputState{
  myInput:{
    task:string,
    description: string
  }
}
const getTaskList=():[]=>{
  let list = localStorage.getItem("Tasks");
  if (list) {
    return JSON.parse(localStorage.getItem("Tasks")|| "");
  } else {
    return [];
  }
}
function App() {
  const [myTask, setTask] = useState<myListState["myTask"]>(getTaskList());
  const [input,setInput]= useState<myInputState["myInput"]>({
    task:"",
    description:""
  });

  return (
    <div className="container-full p-5 text-center ">
      <div className="flex flex-col w-1/2 mx-auto items-center text-white">
        <h3 className="text-2xl font-bold text-black">Todo App</h3>
        <AddTodo myTask={myTask} setTask={setTask} input={input} setInput={setInput}/>
        <Task myTask={myTask} setTask={setTask} input={input} setInput={setInput}/>
      </div>
      <div className="flex flex-col items-center mt-10">
        
      </div>
    </div>
  );
}

export default App;
