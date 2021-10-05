import React, { useContext } from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faRupeeSign, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './HomeServicesPart.css';
import { coursesContext } from '../../App';

const HomeServicesPart = () => {
    // data load from constext api
    const courses = useContext(coursesContext);
    return (
        <div id="service-section">
            <div>
                <Container className="mt-5 py-5 home-service-section">
                    <h2>Most Popular <span>Course</span> <br /> 70% Student Choice</h2>
                    <Row className="py-5">
                        {
                            courses.slice(0,4).map(course =>
                                <Col className="mt-2 p-2" md={3} sm={12}>
                                    <Card className="course-card">
                                        <Card.Img variant="top" src={course.img} />
                                        <Card.Body>
                                            <Card.Title>{course.courseName}</Card.Title>
                                            <Card.Text>
                                                <h4>{course.description}</h4>
                                                {/* icon added */}
                                                <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {course.contentHours}+ Hr Video Content</div>
                                                <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {course.practicalLesson}+ Practical Lesson</div>
                                                <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {course.access}</div>
                                                <div> <span><FontAwesomeIcon icon={faCheckCircle} /></span> {course.support}</div>
                                            </Card.Text>
                                            <div className="d-flex mt-3 price-section">
                                                <h3> <span><FontAwesomeIcon icon={faRupeeSign} /></span>{course.currentPrice}</h3>
                                                <Button variant="warning"><span><FontAwesomeIcon icon={faGraduationCap} /></span> Enrol Now</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HomeServicesPart;