import React from 'react';
import TodoForm from './components/todo/TodoForm'
import TodoList from './components/todo/TodoList'
import './app.css';

function App() {

  return (
    <div className="app">
      <div className='todo-content'>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
