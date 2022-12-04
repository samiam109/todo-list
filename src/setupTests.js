// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import todoListReducer from './redux/todoSlice'


global.renderWithRedux = (component) => {
  const store = configureStore({
    reducer: {
      todoList: todoListReducer,
    }
  })
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  )
}
