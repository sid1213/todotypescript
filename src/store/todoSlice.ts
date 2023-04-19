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

const getTodoFromLocalStorage = (): [] => {
  let taskBox = localStorage.getItem("Tasks");
  if (taskBox) {
    return JSON.parse(localStorage.getItem("Tasks") || "");
  } else {
    return [];
  }
};

const setTodoOnLocalStorage = (state: TodoState) => {
  localStorage.setItem("Tasks", JSON.stringify(state.todos));
};

const initialState: TodoState = {
  todos: getTodoFromLocalStorage(),
};

export const myTodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TaskItem>) => {
      state.todos.push(action.payload);
      setTodoOnLocalStorage(state);
    },

    editTaskAction: (state, action: PayloadAction<NewValues>) => {
      state.todos[action.payload.index].task = action.payload.editTask;
      state.todos[action.payload.index].description =
        action.payload.editDescription;
      setTodoOnLocalStorage(state);
    },

    deleteTaskAction: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
      setTodoOnLocalStorage(state);
    },

    checkTaskAction: (state, action: PayloadAction<CheckState>) => {
      state.todos[action.payload.index].completed = action.payload.taskState;
      setTodoOnLocalStorage(state);
    },
  },
});
export const { addTodo, editTaskAction, deleteTaskAction, checkTaskAction } =
  myTodoSlice.actions;
export default myTodoSlice.reducer;
