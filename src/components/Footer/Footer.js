import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className="footer-section">
            <Container>
                <Row>
                    <Col md={5} sm={12}>
                        <h2>DIGITAL SKILLS</h2>
                        <p>Recently, the Digital Skills has organized online courses to make learning web design, video editing and much more digital skill.</p>
                        <p>Course Related Enquiry And Support : 8918308609</p>
                    </Col>
                    <Col md={3} sm={12}>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col md={4} sm={12}>
                        <img src={logo} alt="" />
                    </Col>
                </Row>
            </Container>
                <p style={{textAlign : "center", margin: "0", paddingBottom: "5px"}}>Copyright 2021 © All rights Reserved Billi4You</p>
        </div>
    );
};

export default Footer;