import { configureStore } from "@reduxjs/toolkit";
import myTodoSlice from "./todoSlice";

export const store = configureStore({
  reducer: {
    myTodo: myTodoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
