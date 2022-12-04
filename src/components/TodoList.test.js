import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoForm from './todo/TodoForm';
import TodoList from './todo/TodoList';

test('todo input is in document', async () => {
  renderWithRedux(<TodoForm />);
  const todo = 'Wash my car';
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  todoInput.value = todo

  await userEvent.click(screen.getByText(/submit/i));

  renderWithRedux(<TodoList />);
  setTimeout(() => {
    const todoList = screen.getAllByText(todo)
    expect(todoList.length).toBe(1)
  })
})
