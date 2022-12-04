import React from 'react';
import ErrorProvider from './common/ErrorProvider';
import ErrorNotification from './common/ErrorNotification';
import TodoForm from './components/todo/TodoForm'
import TodoList from './components/todo/TodoList'
import './app.css';

function App() {

  return (
    <div className="app">
      <ErrorProvider>
        <div className='todo-content'>
          <TodoForm />
          <TodoList />
        </div>
        <ErrorNotification />
      </ErrorProvider>
    </div>
  );
}

export default App;
