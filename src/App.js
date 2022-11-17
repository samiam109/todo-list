import React, { useState } from 'react';
import ErrorProvider from './common/ErrorProvider';
import ErrorNotification from './common/ErrorNotification';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([])

  const addTodo = (todo) => {
    setTodoList((currentList) =>
      [...currentList, {
        id: currentList.length + 1,
        value: todo
      }]
    )
  }

  console.log('render')

  return (
    <div className="App">
      <ErrorProvider>
        <TodoForm addTodo={addTodo} />
        <TodoList list={todoList} />
        <ErrorNotification />
      </ErrorProvider>
    </div>
  );
}

export default App;
