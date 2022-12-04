import React from 'react';
import { useSelector } from 'react-redux'
import Todo from './Todo'


export default function TodoList() {
  const selectTodoIds = state => {
    return state.todoList.todos.map(todo => todo.id)
  }
  const todoIds = useSelector(selectTodoIds)

  return (
    <>
      {todoIds && todoIds.length > 0 ?
        (
          <ul className='list' data-testid="todolist">
            {todoIds.map(id => {
              return <Todo key={id} id={id} />
            })}
          </ul>
        ) : (
          <p>Start by adding todos</p>
        )}
    </>
  )
}
