import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import MenuBar from '../MenuBar/MenuBar';
import './Banner.css';
import bannerperson from '../../images/header-img-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className="banner-container">
            <MenuBar></MenuBar>
            <Container className="mt-5">
                <Row>
                    <Col className="text-end slide-right mt-5 p-5" md={7} sm={12}>
                        <h1>DIGITAL <span>SKILLS</span></h1>
                        <h2>Skill Oriented Online Courses</h2>
                        <Button variant="warning" href="#service-section">START LEARNING <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></Button>
                    </Col>
                    <Col md={5} sm={12}>
                        <div className="banner-person slide-left">
                            <img src={bannerperson} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;