import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./redux/reducers/todo.reducer";

export default configureStore({
  reducer: {
    todoReducer,
  },
});
