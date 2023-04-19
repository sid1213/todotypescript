import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  todos: TaskItem[];
}

interface NewValues {
  editTask: string;
  editDescription: string;
  id: string;
}

interface CheckState {
  taskState: boolean;
  id: string;
}

export interface TaskItem {
  task: string;
  description: string;
  completed: boolean;
  id: string;
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
      state.todos.forEach((elemnt) => {
        if (elemnt.id === action.payload.id) {
          elemnt.task = action.payload.editTask;
          elemnt.description = action.payload.editDescription;
        }
      });
      setTodoOnLocalStorage(state);
    },

    deleteTaskAction: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((elemnt) => {
        return elemnt.id !== action.payload;
      });
      setTodoOnLocalStorage(state);
    },

    checkTaskAction: (state, action: PayloadAction<CheckState>) => {
      state.todos.forEach((elemnt) => {
        if (elemnt.id === action.payload.id) {
          elemnt.completed = action.payload.taskState;
        }
      });
      setTodoOnLocalStorage(state);
    },
  },
});
export const { addTodo, editTaskAction, deleteTaskAction, checkTaskAction } =
  myTodoSlice.actions;
export default myTodoSlice.reducer;
