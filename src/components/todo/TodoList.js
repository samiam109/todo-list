import React from 'react';
import { useSelector } from 'react-redux'
import Todo from './Todo'


export default function TodoList() {

  const list = useSelector((state) => state.todoList.todos)

  return (
    <>
      {list && list.length > 0 ?
        (
          <ul className='list' data-testid="todolist">
            {list.map(todo => {
              return <Todo key={todo.id + todo.value} {...todo} />
            })}
          </ul>
        ) : (
          <p>Start by adding todos</p>
        )}
    </>
  )
}
