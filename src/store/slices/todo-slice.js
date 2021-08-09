import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = {
  todos: [
    { id: "t1", text: "Learn React", completed: false },
    { id: "t2", text: "Learn JS", completed: false },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    removeTodo(state, action) {
      const idToDelete = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== idToDelete);
    },
    toggleTodoStatus(state, action) {
      const id = action.payload;
      const foundTodo = state.todos.find((todo) => todo.id === id);

      foundTodo.completed = !foundTodo.completed;
    },
    clearTodos(state, action) {
      state.todos = [];
    },
    markAll(state, action) {
      state.todos =
        action.payload === "completed"
          ? state.todos.map((todo) => ({ ...todo, completed: true }))
          : state.todos.map((todo) => ({ ...todo, completed: false }));
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
