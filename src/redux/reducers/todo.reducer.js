import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

const todoReducer = createReducer(initialState, {
  CREATE_TODO: (state, action) => {
    return {
      ...state,
      taskList: [...state.taskList, action.payload],
    };
  },
  UPDATE_TODO: (state, action) => {},
  DELETE_TODO: (state, action) => {
    return {
      ...state,
      taskList: state.taskList.filter((item) => item.id !== action.payload),
    };
  },
});

export default todoReducer;
