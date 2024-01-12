import { createSlice } from "@reduxjs/toolkit"

const toDoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: state.list.length + 1,
        text: action.payload.text,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
    deleteCompletedTodos: (state) => {
      state.list = state.list.filter((todo) => !todo.completed);
    },
    markTodoCompleted: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = true;
      }
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompletedTodos,
  markTodoCompleted,
} = toDoSlice.actions;

export default toDoSlice.reducer;