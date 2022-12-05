import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoForm from './todo/TodoForm';
import TodoList from './todo/TodoList';

// ideally I'd mock the redux store instead of doing this 'integration test'
test('todo input is in document', () => {
  renderWithRedux(<TodoForm />);
  const todo = 'Wash my car';
  const todoInput = screen.getByPlaceholderText(/enter todo/i);
  todoInput.value = todo
  userEvent.click(screen.getByText(/submit/i));

  renderWithRedux(<TodoList />);
  setTimeout(() => {
    const todoList = screen.getAllByText(todo)
    expect(todoList.length).toBe(1)
  }, 200)
})

//add tests for multiple list items
