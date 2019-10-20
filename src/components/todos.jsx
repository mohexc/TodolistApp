import React from 'react';
import TodoItem from './todoItem';
import { PropTypes } from 'prop-types';

function Todos({ todos, markComplete, delTodo }) {
  return todos.map(todo => <TodoItem todo={ todo }
    key={ todo.id }
    markComplete={ markComplete }
    delTodo={ delTodo }
  />)
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}
export default Todos
