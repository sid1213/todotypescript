import {createSlice,PayloadAction} from "@reduxjs/toolkit";

interface TodoState {
  todos:TaskItem[]
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

        }
    }
    });
export const {addTodo}=myTodoSlice.actions
export default myTodoSlice.reducer
  