import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// Selected File package
import FileBase64 from 'react-file-base64';

import axios from 'axios'

// STYLES
import {
    Container,
    Button,
    Form,
    FormGroup,
    FormText,
} from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


const UpdateTodo = () => {

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        image: '',
        status: '',
    });

    const { id } = useParams();
    //console.log(id)

    const navigate = useNavigate();

    const submitEdit = (e) => {
        e.preventDefault();
        console.log(todo);
        axios.put(`http://localhost:5000/todos/${id}`, todo)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )

        navigate('/todos')
    }

    return (
        <div>
            <Container className='mt-2'>
                <Form onSubmit={(e) => {
                    submitEdit(e);
                }}>
                    <FormGroup>
                        <h1>Update Todo {todo.title}</h1>
                    </FormGroup>
                    <FormGroup className='mt-1'>
                        <FormText>Title</FormText>
                        <FormControl type="text" name='title' placeholder="Please add a task." onChange={
                            (e) => {
                                setTodo({
                                    ...todo,
                                    title: e.target.value
                                })
                            }
                        } />

                    </FormGroup>
                    <FormGroup className='mt-1'>
                        <FormText>Description</FormText>
                        <FormControl as="textarea" rows="3" onChange={(e) => {
                            setTodo({
                                ...todo,
                                description: e.target.value
                            })
                        }} />
                    </FormGroup>
                    <FormGroup className='mt-1'>
                        <FormText>Due Date</FormText>
                        <FormControl type="date" name='dueDate' placeholder="Please add a task." onChange={(e) => {
                            setTodo({
                                ...todo,
                                dueDate: e.target.value
                            })
                        }} />
                    </FormGroup>
                    <FormGroup className='mt-2 mb-2'>
                        <FormText className='me-2'>Attachment </FormText>
                        <FileBase64 type='file' multiple={false} onDone={
                            (file) => {
                                setTodo({
                                    ...todo,
                                    image: file.base64
                                })
                            }
                        } />
                    </FormGroup>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default UpdateTodo