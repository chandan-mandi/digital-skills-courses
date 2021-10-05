import { faClock, faFileArchive, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WhyOurCourse.css';

const WhyOurCourse = () => {
    return (
        <div className="why-our-course">
            <Container>
                <h2>Why <b>Our Courses</b></h2>
                <h4><span className="light-text">GROW YOUR KNOWLEDGE AND</span> <b>STAY AHEAD OF YOUR COMPETITORS</b></h4>
                <Row>
                    <Col md={4} sm={12} className="total-card-box">
                        <div className="card-box">
                            <FontAwesomeIcon className="icon" icon={faClock}></FontAwesomeIcon>
                            <h2>Life Time Access</h2>
                            <p>After enrollment, you will get lifetime course access so you can watch any time anywhere and in any device.</p>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className="total-card-box">
                        <div className="card-box">
                            <FontAwesomeIcon className="icon" icon={faFileArchive}></FontAwesomeIcon>
                            <h2>EXERCISE FILES</h2>
                            <p>With each enrolled course (If Required), I will provide you some project  Exercise files for practice purposes.</p>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className="total-card-box">
                        <div className="card-box">
                            <FontAwesomeIcon className="icon" icon={faHandsHelping}></FontAwesomeIcon>
                            <h2>WHATSAPP SUPPORT</h2>
                            <p>Providing support is never easy, but I'm always available on WhatsApp. You can clear your doubts at any time.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyOurCourse;