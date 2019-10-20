import React, { useState, useEffect } from 'react';
import Todos from './components/todos';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/header';
import AddTodo from './components/addTodo';
import About from './components/about';
import axios from 'axios';
// import './App.css'


function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setTodos(res.data))
  }, [])

  const markComplete = (id) => {
    let newTodos = todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed
      return todo
    })
    setTodos(newTodos)
  }

  const delTodo = (id) => {
    // let newTodos = todos.filter(todo => todo.id !== id)
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => setTodos([...todos.filter(todo => todo.id !== id)]))


  }
  const addTodo = (title) => {
    // let newTodos = [...todos, {
    //   id: ++todos.length,
    //   title: title,
    //   completed: false
    // }]
    axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })
      .then(res => setTodos([...todos, res.data]))
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path='/' render={ props => (
          <React.Fragment>
            <AddTodo addTodo={ addTodo } />
            <Todos
              className=""
              todos={ todos }
              markComplete={ markComplete }
              delTodo={ delTodo } />
          </React.Fragment>
        ) } />
        <Route path="/about" component={ About } />
      </div>
    </Router>
  );
}

export default App;
