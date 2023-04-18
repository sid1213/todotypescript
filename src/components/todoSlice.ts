import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface TodoState {
  todos:TaskItem[]
}
interface NewValues{
  editTask:string;
  editDescription:string;
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
              console.log(action.payload);
        },
        editTaskAction:(state,action:PayloadAction<NewValues> )=>{
          state.todos[action.payload.id].task=action.payload.editTask;
          state.todos[action.payload.id].description=action.payload.editDescription;

        },
        deleteTaskAction:(state,action:PayloadAction<number> )=>{
          console.log("hii"+action.payload);
          state.todos.splice(action.payload,1);
        },
        
    }
    });
export const {addTodo,editTaskAction,deleteTaskAction}=myTodoSlice.actions
export default myTodoSlice.reducer
  