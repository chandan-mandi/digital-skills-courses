import React, { useEffect, useState } from 'react';
import './OurInstructor.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const OurInstructor = () => {
    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        fetch('./instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <Container className="instructor-section py-5">
            <h2>Our <span>Instructor</span></h2>
            <div className="divider">
                <span></span>
            </div>
            <p className="our-goal-desc">Here my goal is to educate people with ease so they can learn things without thinking about Higher fees, English fear, and software complication.</p>
            <Row>
                {instructors.slice(0, 4).map(instructor =>
                    <Col md={3} sm={12} className="py-5">
                        <Card>
                            <div className="instructor-img img-fluid">
                                <img src={instructor.img} alt="" className="img-fluid" />
                            </div>
                            <h4 className="name">{instructor.name}</h4>
                            <p className="designation">{instructor.role}</p>
                        </Card>
                    </Col>)}
            </Row>
        </Container>
    );
};

export default OurInstructor;