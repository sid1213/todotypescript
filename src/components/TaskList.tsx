import { useAppSelector } from "../hooks";
import Tasks from "./Tasks";
function TaskList() {
  const data = useAppSelector((state) => state.myTodo.todos);
  return (
    <div className="w-full">
      <ul>
        {data.map((singletask) => {
          return <Tasks singletask={singletask} key={singletask.id} />;
        })}
      </ul>
    </div>
  );
}

export default TaskList;
