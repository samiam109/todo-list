import { configureStore } from '@reduxjs/toolkit'
import todoListReducer from './todoSlice'

export default configureStore({
  reducer: {
    todoList: todoListReducer,
  }
})