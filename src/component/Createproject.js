import './Style.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react';


const Createproject = () => {
    const [title,setTitle] = useState('');
    const [tags,setTags] = useState('');
    const [requirement,setRequirement] = useState('');
    const [detail,setDetail] = useState('');
    const [status,setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, tags, requirement, detail, status};

        fetch('http://localhost:3000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
          }).then(() => {
            console.log('new blog added');
          })
    }

    return (
        <div className="create">
                <br />
                
                    <Container>
                        <Form onSubmit={handleSubmit}>
                        <Row className="row"> 
                        
                            <Col className="column" md="3" >
                            
                            <br />
                            <Button variant="warning" className='button'>Upload Profile</Button>{' '}
                            </Col>
                            <Col className="column" >
                            
                            <Form.Control 
                                type="text" 
                                required value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                placeholder="Title" />
                            <Form.Control type="text"  
                                required 
                                value={tags} 
                                onChange={(e) => setTags(e.target.value)} 
                                placeholder="Markdown (tag)" />
                            <br />
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Control type="file" multiple />
                            </Form.Group>
                            <Form.Select value={status}
                                onChange={(e) => setStatus(e.target.value)} >
                            <option>Status</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col className="column" md="6">Requirement Context
                            <br />
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} 
                                required 
                                value={requirement} 
                                onChange={(e) => setRequirement(e.target.value)} />
                            </Form.Group>
                            
                            </Col>
                            
                                
                            <Col className="column" >Detail
                            <br />
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3}
                                required 
                                value={detail} 
                                onChange={(e) => setDetail(e.target.value)} />
                            </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="secondary">Create Project</Button>
                       </Form>   
                    </Container>
                    <div>
                    
                    </div>
              
            </div> 
    )
}

export default Createproject;