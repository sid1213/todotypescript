import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface TodoState {
  todos:TaskItem[]
}
interface NewValues{
  editTask:string;
  editDescription:string;
  id:number;
}
interface CheckState{
  taskState:boolean;
  id:number;
}
export interface TaskItem {
    task:string;
    description:string;
    completed:boolean; 
}
  const initialState:TodoState ={
    todos:[],
  }

  export const myTodoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action:PayloadAction<TaskItem> )=>{
              state.todos.push(action.payload);
              // console.log(action.payload);
        },
        editTaskAction:(state,action:PayloadAction<NewValues> )=>{
          state.todos[action.payload.id].task=action.payload.editTask;
          state.todos[action.payload.id].description=action.payload.editDescription;

        },
        deleteTaskAction:(state,action:PayloadAction<number> )=>{
          state.todos.splice(action.payload,1);
        },
        checkTaskAction:(state,action:PayloadAction<CheckState> )=>{
          state.todos[action.payload.id].completed=action.payload.taskState;

        },
        
    }
    });
export const {addTodo,editTaskAction,deleteTaskAction,checkTaskAction}=myTodoSlice.actions
export default myTodoSlice.reducer
  