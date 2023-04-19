import { useAppSelector } from "../hooks";
import Tasks from "./Tasks";
function TaskList() {
  const data = useAppSelector((state) => state.myTodo.todos);
  return (
    <div className="w-full">
      <ul>
        {data.map((singletask, index) => {
          return (
            <Tasks singletask={singletask} index={index} key={singletask.id} />
          );
        })}
      </ul>
    </div>
  );
}

export default TaskList;
