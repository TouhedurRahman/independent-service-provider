import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='ms-5 me-5' href="#">Food Mart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="">Home</Nav.Link>
                            <Nav.Link href="">Services</Nav.Link>
                            <Nav.Link href="">Blog</Nav.Link>
                            <Nav.Link href="">About Me</Nav.Link>

                        </Nav>
                        <Nav
                            className="my-2 my-lg-0 me-5"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;