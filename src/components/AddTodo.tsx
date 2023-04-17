import React, { useState } from "react";
import { TaskItem, addTodo } from "./todoSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const AddTodo = () => {
  const [input, setInput] = useState<TaskItem>({ task: "", description: "" });
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.myTodo);
  const getInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const insertTodo = () => {
    dispatch(addTodo(input));
    setInput({ task: "", description: "" });
    console.log(data);
  };
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
  );
};

export default AddTodo;
