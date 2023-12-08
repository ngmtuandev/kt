import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    dataUser: {},
  },
  reducers: {
    addUser(state, action) {
      return {
        dataUser: action.payload,
      };
    },
    addTodo(state, action) {
      return {
        dataUser: {
          ...state.dataUser,
          // todo [1, 2, 3]
          todo: [
            ...state.dataUser.todo,
            {
              todoItem: action.payload,
              id: Math.random(),
            },
          ],
        },
      };
    },
    deleteTodo(state, action) {
      console.log("test", action.payload);
      return {
        dataUser: {
          ...state.dataUser,
          todo: state.dataUser.todo.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    },
  },
});

const { actions, reducer } = todoSlice;

export const { addUser, addTodo, deleteTodo } = actions;
