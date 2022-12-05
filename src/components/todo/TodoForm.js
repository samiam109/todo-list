import React, { useState } from 'react'
import { add } from '../../redux/todoSlice'
import { useDispatch } from 'react-redux'

export default function TodoForm() {

  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!todo) {
      return;
    }
    dispatch(add({ todo }))
    setTodo('')
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder="Enter Todo" />
      <button className='btn' disabled={!todo}>Submit</button>
    </form>
  )
}
