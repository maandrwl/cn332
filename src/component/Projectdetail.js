import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Style.css';
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ProjectDetail = () => {
    const { id } = useParams();
    const { data: blog} = useFetch('http://localhost:3000/blogs/' + id);
        return (
            <div className="blog-details">
                <br></br>
                <h2>ProjectDetail - { id }</h2>
                { blog && (
                    <article>
                    <Container>
                        <Row className="row"> 
                            <Col className="column" md="6" >
                            Name: { blog.title }
                            <br></br>
                            Status: { blog.status }
                            </Col>
                            <Col className="column" >Variable width content</Col>
                        </Row>
                        <Row className="row">
                            <Col className="column" >Project Requirment:
                            <br />
                            { blog.requirement }
                            </Col>
                            <Col className="column" >Detail:
                            <br />
                            { blog.detail }
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col className="column" xs lg="6">1 of 3</Col>
                        </Row>
                    </Container>
                    </article>
                )}
                <div>
                <Button variant="secondary" className='button'>Edit</Button>{' '}
                </div>
                
            </div>
        )
    }
    export default ProjectDetail;