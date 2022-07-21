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

export const { addToDo } = todoSlice.actions;
export default todoSlice.reducer

