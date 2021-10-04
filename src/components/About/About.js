import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const About = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Container>
                <h3>I am About Components</h3>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;