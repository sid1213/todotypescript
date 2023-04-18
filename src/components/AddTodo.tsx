import React, { useState } from "react";
import { TaskItem, addTodo } from "../store/todoSlice";
import { useAppDispatch } from "../hooks";

const AddTodo = () => {
  const [input, setInput] = useState<TaskItem>({
    task: "",
    description: "",
    completed: false,
  });
  const dispatch = useAppDispatch();
  const getInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const insertTodo = () => {
    if (input.task === "" || input.description === "") {
      alert("Please add Task title and Task description");
    } else {
      dispatch(addTodo(input));
      setInput({ task: "", description: "", completed: false });
      // console.log(data);
    }
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
