import Task from "./components/Task";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-full p-5 text-center ">
        <div className="flex flex-col w-1/2 mx-auto items-center text-white">
          <h3 className="text-2xl font-bold text-black">Todo App</h3>
          <AddTodo />
          <Task />
        </div>
        <div className="flex flex-col items-center mt-10"></div>
      </div>
    </>
  );
}

export default App;
