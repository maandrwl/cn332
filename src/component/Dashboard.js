import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormControl,Button } from 'react-bootstrap'
import './Style.css';
import React from 'react'

const Dashboard = ({ blogs }) => {
    return (

        <div>
                
        <br />
            <Container>
            <Row className="row">
                <Col className="column" md="3">
                    <Form>
                    <label>ค้นหาชื่อโปรเจค
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </label>    
                    </Form>
                    <label>Faculty
                    <Form.Select aria-label="Default select example">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    </label>
                    <br />
                    <form>
                    <label>Tags
                        <br />
                        <input type="text" />
                    </label>
                    </form>
                    <form>
                    <label>Teacher
                        <br />
                        <input type="text" />
                    </label>
                    </form>
                    <br />
                    <Button variant="dark">ค้นหา</Button>{' '}
                
                </Col>
                <Col className="column">
                {blogs.map(blog => (
                        <div className="blog-preview"  key={blog.id} >
                            <Link to={`/blogs/${blog.id}`}>
                                <h2>{ blog.title }</h2>
                                <p>Detail { blog.detail }</p>
                            </Link>
                        </div>
                ))}
                </Col>
            
            </Row>

            </Container>
        </div> 
      
    );
  }
   
  export default Dashboard;