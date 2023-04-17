import { useAppSelector } from "../hooks";

function Task() {
  const data = useAppSelector((state) => state.myTodo.todos);
  console.log(data);
  return (
    <div>
      <ul className="w-full">
        {data.map((ele, index) => {
          return (
            <li
              className="bg-purple-300  my-2 border border-red-700 flex justify-between text-start gap-5 p-5 "
              key={index}
            >
              <div>
                <p className=" font-bold text-red-700">{ele.task}</p>
                <p className="text-xs">{ele.task}</p>
              </div>
              <button className="text-blue-700 hover:text-blue-500">
                Edit
              </button>
              <button className="text-red-800 hover:text-red-500">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Task;
