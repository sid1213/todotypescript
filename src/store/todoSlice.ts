import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  todos: TaskItem[];
}
interface NewValues {
  editTask: string;
  editDescription: string;
  index: number;
}
interface CheckState {
  taskState: boolean;
  index: number;
}
export interface TaskItem {
  task: string;
  description: string;
  completed: boolean;
}
// const getTodoFromLocalStorage = () => {};
let taskBox = localStorage.getItem("Tasks");
let initialStateBox = [];
if (taskBox) {
  initialStateBox = JSON.parse(localStorage.getItem("Tasks") || "");
} else {
  initialStateBox = [];
}
const initialState: TodoState = {
  todos: initialStateBox,
};

export const myTodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TaskItem>) => {
      console.log(taskBox);
      state.todos.push(action.payload);
      localStorage.setItem("Tasks", JSON.stringify(state.todos));
    },

    editTaskAction: (state, action: PayloadAction<NewValues>) => {
      state.todos[action.payload.index].task = action.payload.editTask;
      state.todos[action.payload.index].description =
        action.payload.editDescription;
      localStorage.setItem("Tasks", JSON.stringify(state.todos));
    },

    deleteTaskAction: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
      localStorage.setItem("Tasks", JSON.stringify(state.todos));
    },

    checkTaskAction: (state, action: PayloadAction<CheckState>) => {
      state.todos[action.payload.index].completed = action.payload.taskState;
      localStorage.setItem("Tasks", JSON.stringify(state.todos));
    },
  },
});
export const { addTodo, editTaskAction, deleteTaskAction, checkTaskAction } =
  myTodoSlice.actions;
export default myTodoSlice.reducer;
