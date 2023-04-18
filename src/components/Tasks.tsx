import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { AiFillEdit } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import {
  TaskItem,
  checkTaskAction,
  deleteTaskAction,
  editTaskAction,
} from "../store/todoSlice";

interface ListPropState {
  todos: TaskItem;
  id: number;
}
interface editedInputState {
  taskInput: string;
  descriptioninput: string;
}
const Tasks: React.FC<ListPropState> = ({ todos, id }) => {
  const data = useAppSelector((state) => state.myTodo.todos);
  const dispatch = useAppDispatch();
  const [editedInput, setEditedInput] = useState<editedInputState>({
    taskInput: "",
    descriptioninput: "",
  });
  const [classShowHide, setClassShowHide] = useState<boolean>(false);
  const setEditedInputFun = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEditedInput({ ...editedInput, [e.target.name]: e.target.value });
  };
  const setEditTask = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    setEditedInput({
      taskInput: data[id].task,
      descriptioninput: data[id].description,
    });
    setClassShowHide(true);
  };
  const editTask = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    dispatch(
      editTaskAction({
        editTask: editedInput.taskInput,
        editDescription: editedInput.descriptioninput,
        id,
      })
    );
    setClassShowHide(false);
  };
  const checkTask = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    // console.log(e.currentTarget.checked);
    dispatch(
      checkTaskAction({
        taskState: e.currentTarget.checked,
        id,
      })
    );
  };
  const deleteTask = (id: number) => {
    dispatch(deleteTaskAction(id));
  };

  return (
    <li
      className={` ${
        todos.completed ? " bg-green-400" : "bg-purple-300"
      } my-2 border border-red-700 flex justify-between text-start gap-5 p-5 w-full rounded `}
      key={id}
    >
      <div className="space-y-2 w-2/3 flex flex-col text-black  ">
        <div className={` space-y-2 ${classShowHide ? "block" : "hidden"} `}>
          <input
            type="text"
            className="border-2 p-1 w-full border-black block"
            placeholder="Edit task title"
            value={editedInput.taskInput}
            onChange={(e) => {
              setEditedInputFun(e);
            }}
            name="taskInput"
          />
          <input
            type="text"
            className="border-2 p-1 border-black block w-full"
            placeholder="Edit task description"
            value={editedInput.descriptioninput}
            onChange={(e) => {
              setEditedInputFun(e);
            }}
            name="descriptioninput"
          />
          <button
            className="button block w-fit bg-yellow-400 p-2 rounded border-1 border-red-600 text-xs"
            onClick={(e) => {
              editTask(e, id);
            }}
          >
            Submit
          </button>
        </div>

        <div className={`${classShowHide ? "hidden" : "block"}`}>
          <p className=" font-bold text-red-700 text-2xl">{todos.task}</p>
          <p className="text-xs">{todos.description}</p>
        </div>
      </div>

      <div className="flex space-x-5 w-fit">
        <button
          className="text-blue-700 hover:text-blue-500 text-xl"
          onClick={(e) => {
            setEditTask(e, id);
          }}
        >
          <AiFillEdit />
        </button>
        <button
          className="text-red-800 hover:text-red-500"
          onClick={() => {
            deleteTask(id);
          }}
        >
          <ImBin />
        </button>
        <input
          type="checkbox"
          name="check"
          onChange={(e) => {
            checkTask(e, id);
          }}
        />
      </div>
    </li>
  );
};

export default Tasks;
