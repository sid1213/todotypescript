import { useAppSelector, useAppDispatch } from "../hooks";
import { AiFillEdit } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { deleteTaskAction, editTaskAction } from "./todoSlice";
function Task() {
  const data = useAppSelector((state) => state.myTodo.todos);
  const dispatch = useAppDispatch();

  const setEditTask = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    let elem: any =
      e.currentTarget.parentElement?.previousElementSibling?.children;
    let childelem: any = elem[0].children;
    childelem[0].value = data[id].task;
    childelem[1].value = data[id].description;
    elem[0].classList.replace("hidden", "block");
    elem[1].classList.add("hidden");
  };
  const editTask = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    let elem: any = e.currentTarget.parentElement;
    elem?.nextElementSibling.classList.replace("hidden", "block");
    dispatch(
      editTaskAction({
        editTask: elem.children[0].value,
        editDescription: elem.children[1].value,
        id,
      })
    );
    elem.classList.replace("block", "hidden");
    // elem.si.classList.replace("block", "hidden");
    // elem.classList.replace("block", "hidden");
  };
  const deleteTask = (id: number) => {
    dispatch(deleteTaskAction(id));
  };

  return (
    <div className="w-full">
      <ul>
        {data.map((ele, id) => {
          return (
            <li
              className="bg-purple-300  my-2 border border-red-700 flex justify-between text-start gap-5 p-5 w-full rounded "
              key={id}
            >
              <div className="space-y-2 w-2/3 flex flex-col text-black  ">
                <div className="space-y-2 hidden ">
                  <input
                    type="text"
                    className="border-2 p-1 border-black "
                    // value={editTest.task}
                    // onChange={setEdit}
                  />
                  <input
                    type="text"
                    className="border-2 p-1 border-black "
                    // value={editTest.description}
                    // onChange={setEdit}
                  />
                  <button
                    className="button block bg-green-400 p-2 rounded border-1 border-red-600 text-xs"
                    onClick={(e) => {
                      editTask(e, id);
                    }}
                  >
                    Submit
                  </button>
                </div>

                <div>
                  <p className=" font-bold text-red-700 text-2xl">{ele.task}</p>
                  <p className="text-xs">{ele.description}</p>
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
                  id="checkbox"
                  className="text-xl bg-slate-400"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Task;
