import { configureStore } from '@reduxjs/toolkit';
import myTodoSlice from "../components/todoSlice"

export const store = configureStore({
  reducer: {
    myTodo:myTodoSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 