import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './About.css';
import personImg from '../../images/header-img-1.png'

const About = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Container className="about-section my-5">
                <h2>About <br /> DIGITAL <span>SKILLS</span></h2> <hr />
                <div className="d-flex mt-5">
                    <div>
                        <img src={personImg} alt="" />
                    </div>
                    <div>
                        <h4>My name is Chandan Mandi and I’m an Entrepreneur, YouTuber, teacher and an Engineer. Here my goal is to educate people with ease so they can learn things without thinking about Higher fees, English fear, and software complication.</h4>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;