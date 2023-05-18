import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import PineSapLogo from '../../assets/images/small_pine_logo.png';

const NavbarComponent: React.FC = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">
            <img src={PineSapLogo} id="navbar_img" alt="Brand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="/dashboard" className="nav_link">
                Dashboard
            </Nav.Link>
            <Nav.Link href="/" className="nav_link">
                Landing
            </Nav.Link>
            <Nav.Link href="#" className="nav_link">
                Contact
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        
        <style>{`
        /* Nav Styles */
        .ct-nav {
        display: flex;
        justify-content: space-between;
        }
        #navbar_img {
        height: 50px; /* Adjust the desired height */
        width: auto; /* This will maintain the aspect ratio */
        }
        .nav_link {
        color: darkgreen;
        font-size: large;
        font-family: 'Courier New', Courier, monospace;
        }
        .nav_link:hover {
        color: limegreen;
        }
        `}</style>
    </div>
  );
};

export {NavbarComponent};
