import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    loading: false,
}

export const fetchTodos = createAsyncThunk("/", async () => {
    const response = await fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list");
    const todos = await response.json();
    return todos;
})

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToDo(state, action) {
            state.todos.push(action.payload);
        },
        updateToDo(state, action) {
            const { id, title, description, status } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            todo.title = title;
            todo.description = description;
            todo.status = status;
        },
        updateStatusToDo(state, action) {
            const { id, status } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            todo.status = status;
        },
        removeToDo(state, action) {
            const { id } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            state.todos.splice(state.todos.indexOf(todo), 1);
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})

export const { addToDo, updateToDo, removeToDo, updateStatusToDo } = todoSlice.actions;
export default todoSlice.reducer

