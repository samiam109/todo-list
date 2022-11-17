import React, { useMemo } from 'react';


export default function TodoList({ list }) {

  const sortedTodoList = useMemo(() => {
    return [...list].sort((a, b) => {
      return a.value.localeCompare(b.value)
    })
  }, [list])

  return (
    <>
      {list && list.length > 0 ?
        (
          <ul>
            {sortedTodoList.map((todo) => <li key={todo.id}>{todo.value}</li>)}
          </ul>
        ) : (
          null
        )}
    </>
  )
}
