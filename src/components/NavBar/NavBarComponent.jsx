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
            Denise James, BSEE, MSEE
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="text-white mx-2 fs-6"
              onClick={() => navigate('/')}
            >
              Expertise
            </Nav.Link>
            <Nav.Link
              className="text-white mx-2 fs-6"
              onClick={() => navigate('/machine-learning')}
            >
              Education
            </Nav.Link>
            <Nav.Link
              className="text-white mx-2 fs-6"
              onClick={() => navigate('/web-design')}
            >
              References
            </Nav.Link>
            <Nav.Link
              className="text-white mx-2 fs-6"
              onClick={() => navigate('/training')}
            >
              Training
            </Nav.Link>
            <Nav.Link
              className="text-white mx-2 fs-6"
              onClick={() => navigate('/contact')}
            >
              Contact Me
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 fs-6"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button variant="outline-light" type="submit" className="fs-6">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
