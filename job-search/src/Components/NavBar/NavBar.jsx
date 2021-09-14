import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap"

class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="success" variant="light">
                <Navbar.Brand href="/">FastJobsFinder&copy;</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Jobs</Nav.Link>
                        <Nav.Link href="#pricing">Location</Nav.Link>

                    </Nav>

                    <Nav>
                        <Nav.Link href="#deets">Profile</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Links
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;