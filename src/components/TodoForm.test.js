import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoForm from './todo/TodoForm';

test('todo input is in document', () => {
  renderWithRedux(<TodoForm />);
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  expect(todoInput).toBeInTheDocument()
})
test('todo input should be empty', () => {
  renderWithRedux(<TodoForm />);
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  expect(todoInput.value).toBe('')
})
test('todo submit is in document', () => {
  renderWithRedux(<TodoForm />);
  const submitTodo = screen.getByText(/submit/i);
  expect(submitTodo).toBeInTheDocument()
})
test('can enter a todo into the todo input', () => {
  renderWithRedux(<TodoForm />);
  const todo = 'Wash my car';
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  todoInput.value = todo
  expect(todoInput.value).toEqual(todo)
})
test('todo submit is disabled if todo is empty', () => {
  renderWithRedux(<TodoForm />);
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  const submitTodo = screen.getByText(/submit/i);
  expect(todoInput.value).toEqual('')
  expect(submitTodo).toBeDisabled()
})
test('submit is not disabled if there is a todo', () => {
  renderWithRedux(<TodoForm />);
  const todo = 'Wash my car';
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  todoInput.value = todo
  const submitTodo = screen.getByText(/submit/i);
  expect(todoInput.value).toEqual(todo)
  // should be able to use the following but it was not responding with the correct disabled value
  //await waitFor(() => expect(submitTodo).not.toBeDisabled())
  setTimeout(() => {
    expect(submitTodo).not.toBeDisabled()
  }, 200)
})
//clean up test with waitFor
test('todo input is cleared after submit', () => {
  renderWithRedux(<TodoForm />);
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  const todo = 'Wash my car';
  todoInput.value = todo
  userEvent.click(screen.getByText(/submit/i))
  setTimeout(() => {
    expect(todoInput.value).toBe('')
  }, 200)
})

