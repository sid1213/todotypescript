import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { AiFillEdit } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import {
  TaskItem,
  checkTaskAction,
  deleteTaskAction,
  editTaskAction,
} from "../store/todoSlice";

interface EachTaskPropState {
  singletask: TaskItem;
}
interface editedInputState {
  taskInput: string;
  descriptioninput: string;
}
const Tasks: React.FC<EachTaskPropState> = ({ singletask }) => {
  const dispatch = useAppDispatch();

  const [editedInput, setEditedInput] = useState<editedInputState>({
    taskInput: "",
    descriptioninput: "",
  });

  const [classShowHide, setClassShowHide] = useState<boolean>(false);

  const setEditedInputFun = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEditedInput({
      ...editedInput,
      [e.target.name]: e.target.value,
    });
    // setEditedInput({ ...editedInput, [e.target.name]: e.target.value });
  };

  const setEditTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEditedInput({
      taskInput: singletask.task,
      descriptioninput: singletask.description,
    });
    setClassShowHide(true);
  };

  const editTask = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    dispatch(
      editTaskAction({
        editTask: editedInput.taskInput,
        editDescription: editedInput.descriptioninput,
        id,
      })
    );
    setClassShowHide(false);
  };

  const checkTask = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    dispatch(
      checkTaskAction({
        taskState: e.currentTarget.checked,
        id,
      })
    );
  };

  const deleteTask = (id: string) => {
    dispatch(deleteTaskAction(id));
  };

  return (
    <li
      className={` ${
        singletask.completed ? " bg-green-400" : "bg-[#e7f0fe]"
      } my-2 border-2 border-black flex justify-between text-start gap-5 p-5 w-full rounded `}
    >
      <div className="space-y-2 w-full flex flex-col text-black  ">
        <div className={` space-y-2 ${classShowHide ? "block" : "hidden"} `}>
          <input
            type="text"
            className="border-2 p-1 w-full border-black block"
            placeholder="Edit task title"
            value={editedInput.taskInput}
            onChange={setEditedInputFun}
            name="taskInput"
          />
          <input
            type="text"
            className="border-2 p-1 border-black block w-full"
            placeholder="Edit task description"
            value={editedInput.descriptioninput}
            onChange={setEditedInputFun}
            name="descriptioninput"
          />
          <button
            className="button block w-fit bg-yellow-400 p-2 rounded border-1 border-red-600 text-xs"
            onClick={(e) => {
              editTask(e, singletask.id);
            }}
          >
            Submit
          </button>
        </div>

        <div className={`${classShowHide ? "hidden" : "block"}`}>
          <p className=" font-bold text-gray-800  text-2xl">
            {singletask.task}
          </p>
          <p className="text-xs">{singletask.description}</p>
        </div>
      </div>

      <div
        className={`flex space-x-5 w-fit ${classShowHide ? "hidden" : "block"}`}
      >
        <button
          className="text-blue-700 hover:text-blue-500 text-xl"
          onClick={(e) => {
            setEditTask(e);
          }}
        >
          <AiFillEdit />
        </button>
        <button
          className="text-red-800 hover:text-red-500 text-xl"
          onClick={() => {
            deleteTask(singletask.id);
          }}
        >
          <ImBin />
        </button>
        <input
          className="w-5"
          type="checkbox"
          name="check"
          checked={singletask.completed}
          onChange={(e) => {
            checkTask(e, singletask.id);
          }}
        />
      </div>
    </li>
  );
};

export default Tasks;
