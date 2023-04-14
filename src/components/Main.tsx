import React, { useEffect, useState }  from "react";
import Items from "./Items";

function Main() {
const [inputValues,setValues]=useState({
  task:"",
  description:"",
})
const [listArr,setList]=useState<object[]>([]);

const setTask= (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) :void =>{
  setValues({
    ...inputValues,
    [e.target.name]:e.target.value
  });
  console.log(inputValues);
}
const setArr=() =>{
  setList([...listArr,inputValues])
  
}
  return (

    <div className= "container-full p-5 text-center ">
      <div className= "flex flex-col w-1/2 mx-auto items-center text-white">
        <h3 className= "text-2xl font-bold text-black">Todo App</h3>
        <input
          type= "text"
          placeholder= "Enter Task title"
          className= "p-3 w-full border border-blue-700 rounded mt-2 bg-blue-950  placeholder:text-gray-300"
          value={inputValues.task}
          onChange={setTask}
          name="task"
        />
        <textarea
          placeholder="Description"
          className="p-3 border border-blue-700 rounded mt-2 bg-blue-950 w-full placeholder:text-gray-300"
          value={inputValues.description}
          onChange={setTask}
          name="description"

        />
      <button className="bg-green-900 active:bg-green-700 mt-5 p-3 w-fit rounded " onClick={setArr}>
          ADD TODO
        </button>
      </div>
      <div className="flex flex-col items-center mt-10">
        {
          listArr.map((myval)=>{
            return <Items mytask={myval}/>
          })
          
        }
      </div>
     
    </div>
  );
}

export default Main;
