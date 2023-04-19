import AddTodo from "./components/AddTodo";
import "./App.css";
import TaskList from "./components/TaskList";
function App() {
  return (
    <div className="bg-gray-600 min-h-screen">
      <div className="container-full p-5 text-center ">
        <div className="flex flex-col   sm:w-2/3 w-full mx-auto items-center text-white">
          <h3 className="text-2xl font-bold text-black mb-5">Todo App</h3>
          <AddTodo />
          <TaskList />
        </div>
        <div className="flex flex-col items-center mt-10"></div>
      </div>
    </div>
  );
}

export default App;
