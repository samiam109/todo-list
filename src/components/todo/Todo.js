import React, { useState, useMemo } from 'react'
import { update, remove } from '../../redux/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Todo({ id }) {
  const selectTodoById = (state, todoId) => {
    return state.todoList.todos.find(todo => todo.id === todoId)
  }
  const todo = useSelector(state => selectTodoById(state, id))
  const { value, isComplete } = todo;
  const [completeTodo, setCompleteTodo] = useState(isComplete)
  const todoMemo = useMemo(() => {
    return {
      ...todo,
      isComplete: completeTodo
    }
  }, [completeTodo])
  const dispatch = useDispatch();

  const updateComplete = () => {
    setCompleteTodo(() => {
      dispatch(update(todoMemo))
      return true
    })
  }
  const handleComplete = () => {
    updateComplete()
    console.log(todo, 'payload')
    setTimeout(() => {
      dispatch(remove(todo))
    }, 1000)

  }
  return (
    <div>
      <li className={`todo-item${completeTodo ? '-complete' : ''}`}>
        {value}
      </li>
      {!completeTodo ? <button className='btn' onClick={handleComplete}>Complete</button> : null}
    </div>
  )
}
