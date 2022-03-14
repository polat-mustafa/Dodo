import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card, Button } from 'react-bootstrap'
import moment from 'moment'
import axios from 'axios'

import { deleteTodo } from '../axios/index.js'

const TodoItems = ({ todo }) => {

  const navigate = useNavigate();

  const [check, setCheck] = useState(true)



  const editTodo = () => {
    navigate(`/update/${todo._id}`)
  }

  const checkTodo = () => {
    setCheck(!check)
    axios.put(`http://localhost:5000/todos/${todo._id}`, {
      ...todo,
      completed: check
    })
      .then(res => {
        console.log(res)
      }
      )

    console.log(check)
  }



  // moment kütüphanesi ile tarih formatını belirlemek için kullanılmıştır. 
  return (
    <Card className='rounded my-3 py-3'>
      <Card.Img variant="top" src={todo.image} />
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>
          {todo.description}
        </Card.Text>
        <hr />
        <Card.Subtitle className="mb-2 text-muted">Created Date:{" "} {moment(todo.createdAt).fromNow()}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Due Date:{" "} {todo.dueDate}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={() => {
          checkTodo()
        }}>
          &#10003;</Button>
        <span style={{ margin: '0 10px', }}>{!check ? 'Completed' : 'Not Completed'}</span>
      </Card.Footer>
      <Card.Footer className="text-muted" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="primary" onClick={editTodo}>Edit</Button>
        <Button variant="primary" onClick={() => deleteTodo(todo._id).then(window.location.reload(true))}>Delete</Button>
      </Card.Footer>
    </Card>
  )
}

export default TodoItems