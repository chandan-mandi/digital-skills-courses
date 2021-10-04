import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const Contact = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Container>
                <h3>This is Contact Section</h3>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;