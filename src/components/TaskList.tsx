import { useAppSelector } from "../hooks";
import Tasks from "./Tasks";

function TaskList() {
  const data = useAppSelector((state) => state.myTodo.todos);
  return (
    <div className="w-full">
      <ul>
        {data.map((todos, id) => {
          return <Tasks todos={todos} id={id} key={id} />;
        })}
      </ul>
    </div>
  );
}

export default TaskList;