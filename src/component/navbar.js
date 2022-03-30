import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button, Form, Container, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';
import Myproject from './Myproject';
import Createproject from './Createproject';
import Projectdetail from './Projectdetail';

export default class NavbarComp extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Navbar bg="warning" variant='light'>
                        <Container Navbar>
                        <Navbar.Brand >
                            <img
                            src="/HORIZONTAL LOGO.png"
                            width="250"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                            />
                            </Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/Dashboard"}>Dashboard</Nav.Link>
                            <Nav.Link as={Link} to={"/Myproject"}>My Project</Nav.Link>
                            <Form className="d-flex">
                                <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-secondary">Search</Button>
                            </Form>
                            </Nav>
                        

                            <Navbar.Collapse className="justify-content-end">
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Report</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
                                </NavDropdown>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Myproject" element={<Myproject />} />
                    <Route path="/Createproject" element={<Createproject />} />
                    <Route path="/Projectdetail" element={<Projectdetail />} />
                </Routes>
                </div>
            </Router>
        )
    }
}