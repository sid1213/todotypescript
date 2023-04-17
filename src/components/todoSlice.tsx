import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit';

export interface TaskItem {
    task:string;
    description:string 
}
  const initialState: TaskItem[]=[{
    task:" ",
    description:""
  }]

  export const myTodoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload);
            console.log(action.payload);
        }
    }
    });
export const {addTodo}=myTodoSlice.actions
export default myTodoSlice.reducer
  