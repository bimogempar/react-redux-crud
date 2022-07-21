import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todoSlice'

export default configureStore({
    reducer: {
        todos: todosReducer,
    },
});