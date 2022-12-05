import { screen } from '@testing-library/react';
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
  const todoInput = screen.getByText(/submit/i);
  expect(todoInput).toBeInTheDocument()
})
test('can enter a todo into the todo input', () => {
  renderWithRedux(<TodoForm />);
  const todo = 'Wash my car';
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  todoInput.value = todo
  expect(todoInput.value).toEqual(todo)
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

