import React, { useState } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './NavBarComponent.module.css';

const NavbarComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); 


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/search?query=${searchQuery}');
    setSearchQuery(''); // Clear the search field after submission
  };


  return (
    <div className={styles.navbarContainer}>
      <Navbar expand="lg" className={styles.navbar}>
        <Navbar.Brand style={{ marginLeft: '2rem', marginRight: '10rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginLeft: '1rem', color: 'gold', fontFamily: 'Georgia', fontSize: '1.5vw' }}>
            Denise James  
             MSEE, BSEE
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
        onClick={() => navigate('/machine-learning')}
      >
        Machine Learning
      </Nav.Link>
      <Nav.Link
        className="text-white mx-2 fs-6"
        onClick={() => navigate('/web-design')}
      >
        Web Design
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
        Contact Us
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
