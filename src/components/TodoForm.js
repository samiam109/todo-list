import React, { useState } from 'react'
import useError from '../common/useError'

export default function TodoForm({ addTodo }) {

  const [userInput, setUserInput] = useState('')
  const { addError } = useError();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userInput)

    if (!userInput) {
      addError('no todo. Handle errors!')
      return;
    }
    addTodo(userInput)
    setUserInput('')
  }

  return (
    <header className="App-header">
      <form onSubmit={handleSubmit}>
        Todo:
        <input onChange={(e) => setUserInput(e.target.value)} value={userInput} type="text" name="todo" placeholder="Todo Item" />
        <span className='error'></span>
        <button>Submit</button>
      </form>
    </header>
  )
}
