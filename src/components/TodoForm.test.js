import { screen } from '@testing-library/react';
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