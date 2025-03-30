import React, { useState } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './NavBarComponent.module.css';

const NavbarComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchQuery}`);
    setSearchQuery(''); // Clear the search field after submission
  };

  return (
    <div className={styles.navbarContainer}>
      <Navbar expand="lg" className={styles.navbar}>
        <Navbar.Brand style={{ marginLeft: '2rem', marginRight: '10rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginLeft: '1rem',
              color: 'gold',
              fontFamily: 'Georgia',
              fontSize: '1.5vw',
            }}
          >
         </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="text-white mx-2 fs-6"
              onClick={() => navigate('/')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="text-white mx-2 fs-6"
              onClick={() => navigate('/resume')}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              className="text-white mx-2 fs-6"
              onClick={() => navigate('/computer')}
            >
              Computer Science
            </Nav.Link>
            <Nav.Link
              className="text-white mx-2 fs-6"
              onClick={() => navigate('/ai')}
            >
              Artificial Intelligence
            </Nav.Link>
            <Nav.Link
              className="text-white mx-2 fs-6"
              onClick={() => navigate('/python')}
            >
              Python Programming
            </Nav.Link>
            <Nav.Link
              className="text-white mx-2 fs-6"
              onClick={() => navigate('/python')}
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
