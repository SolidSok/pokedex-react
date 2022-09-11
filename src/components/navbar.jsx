import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Button,
  NavDropdown,
  Dropdown,
} from 'react-bootstrap';

export const PokeNav = () => {
  const topButton = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <Navbar className="nav" sticky="top" bg="dark" expand="lg" variant="dark">
      {' '}
      <Container fluid>
        <Navbar.Brand className="nav-logo">PokeDex</Navbar.Brand>
        <Button onClick={topButton} variant="outline-secondary">
          Top
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
