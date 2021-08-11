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
      state.todos = [newTodo, ...state.todos];
      state.todos.sort((a, b) => a.completed - b.completed);
    },
    removeTodo(state, action) {
      const idToDelete = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== idToDelete);
    },
    toggleTodoStatus(state, action) {
      const id = action.payload;
      const foundTodo = state.todos.find((todo) => todo.id === id);

      foundTodo.completed = !foundTodo.completed;

      state.todos.sort((a, b) => a.completed - b.completed);
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
    changeTodoText(state, action) {
      const foundTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      foundTodo.text = action.payload.text;
    },
    changeTodoOrder(state, action) {
      const dragIndex = action.payload.dragIndex;
      const hoverIndex = action.payload.hoverIndex;

      const hoveredTask = state.todos[hoverIndex];
      if (hoveredTask.completed) {
        return;
      }

      const draggedTask = state.todos[dragIndex];
      if (draggedTask.completed) {
        return;
      }

      state.todos.splice(dragIndex, 1);
      state.todos.splice(hoverIndex, 0, draggedTask);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
