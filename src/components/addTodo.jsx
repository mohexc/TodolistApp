import React, { useState } from 'react'

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(title)
    setTitle('')

  }
  const onChange = (e) => setTitle(e.target.value)


  return (
    <form style={ { display: 'flex' } } className='p-1' onSubmit={ onSubmit } >
      <input
        type="text"
        name="title"
        placeholder="Add Todo..."
        style={ { flex: "10" } }
        className="form-control"
        value={ title }
        onChange={ onChange }
      />
      <input
        type="submit"
        value="submit"
        className="btn btn-outline-danger mx-1"
        style={ { flex: "1" } } />
    </form>
  )
}

export default AddTodo
