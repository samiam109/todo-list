import React, { useState } from 'react'
import { add } from '../../redux/todoSlice'
import { useDispatch } from 'react-redux'
import useError from '../../common/useError'

export default function TodoForm() {

  const [todo, setTodo] = useState('')
  const { addError } = useError()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(todo, 'todo')

    if (!todo) {
      addError('no todo. Handle errors!')
      return;
    }
    dispatch(add({ todo }))
    setTodo('')
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder="Enter Todo" />
      <span className='error'></span>
      <button className='btn'>Submit</button>
    </form>
  )
}
