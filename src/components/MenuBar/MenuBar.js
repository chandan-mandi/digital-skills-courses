import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './MenuBar.css'

const MenuBar = () => {


    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-2">
                        <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
                        <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                        <NavLink to="/services" activeStyle={activeStyle}>Services</NavLink>
                        <NavLink to="/contact" activeStyle={activeStyle}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;