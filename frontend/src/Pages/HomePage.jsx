import React from 'react'
import { Container } from 'react-bootstrap'
import Todo from '../components/Todo'

const HomePage = () => {
    return (
        <div>
            <Container>
                <Todo />
            </Container>
        </div>
    )
}

export default HomePage