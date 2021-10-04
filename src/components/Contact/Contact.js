import { faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Container>
                <div className="contact-section">
                    <h2>Contact Us</h2>
                    <div className="divider">
                        <span></span>
                    </div>
                    <FontAwesomeIcon icon={faPhoneAlt} className="icon"></FontAwesomeIcon> <br />
                    <p>+91 -8918308609</p>
                    <p className="only-whatsapp">(Only For WhatsApp And Course Related Inquiry)</p>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;