import React from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Search from './Search'

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" collapseOnSelect>
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand >DODO LIST</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to="/">
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/todos">
                            <Nav.Link href="#action2">My Todo Lists</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form className="d-flex">
                        <Search />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header