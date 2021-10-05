import { faCheckCircle, faGraduationCap, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { coursesContext } from '../../App';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const Services = () => {
    
    // use context api 
    const courses = useContext(coursesContext);

    return (
        <div>
            <MenuBar></MenuBar>
            <Container className="mt-5 home-service-section">
                    <h2>Most Popular <span>Course</span> <br /> 70% Student Choice</h2>
                    <Row>
                        {
                            courses.map(course =>
                                <Col className="mt-2 p-2" md={3} sm={12}>
                                    <Card className="course-card">
                                        <Card.Img variant="top" src={course.img} />
                                        <Card.Body>
                                            <Card.Title>{course.courseName}</Card.Title>
                                            <Card.Text>
                                                <h4>{course.description.slice(0,50)}</h4>
                                                <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {course.contentHours}+ Hr Video Content</div>
                                                <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {course.practicalLesson}+ Practical Lesson</div>
                                                <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {course.access}</div>
                                                <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {course.support}</div>
                                            </Card.Text>
                                            <div className="d-flex mt-3 price-section">
                                                <h3> <span><FontAwesomeIcon icon={faRupeeSign} /></span> {course.currentPrice}</h3>
                                                <Button variant="warning"><span><FontAwesomeIcon icon={faGraduationCap} /></span> Enrol Now</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Services;