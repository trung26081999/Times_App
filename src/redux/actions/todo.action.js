import { createAction } from "@reduxjs/toolkit";

export const createTodoAction = createAction("CREATE_TODO");
export const updateTodoAction = createAction("UPDATE_TODO");
export const deleteTodoAction = createAction("DELETE_TODO");
