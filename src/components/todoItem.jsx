import React from 'react'
import PropTypes from 'prop-types'


function TodoItem({ todo, markComplete, delTodo }) {

  const getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: todo.completed ? 'line-through' : 'none'
    }
  }

  // const markComplete

  return (
    <div style={ getStyle() }>
      <input type="checkbox" checked={ todo.completed } onChange={ () => markComplete(todo.id) } />
      <span style={ titleStyle }>{ todo.title }</span>
      <button style={ btnStyle } onClick={ () => delTodo(todo.id) }>X</button>
    </div>)
}

export default TodoItem

TodoItem.prototype = {
  todo: PropTypes.object.isRequired
}
const titleStyle = {
  paddingLeft: '10px'
}

const btnStyle = {
  background: '#ff0000',
  color: "#fff",
  border: 'none',
  padding: '0px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

