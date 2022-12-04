import React, { useState } from 'react'
import { complete, remove } from '../../redux/todoSlice'
import { useDispatch } from 'react-redux'

export default function Todo(todo) {
  const [isComplete, setIsComplete] = useState(false)
  const dispatch = useDispatch();

  const updateComplete = () => {
    setIsComplete(() => {
      dispatch(complete(todo))
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
      <li className={`todo-item${isComplete ? '-complete' : ''}`}>
        {todo.value}
      </li>
      {!isComplete ? <button className='btn' onClick={handleComplete}>Complete</button> : null}
    </div>
  )
}
