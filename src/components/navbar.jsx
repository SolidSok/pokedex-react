import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export const PokeNav = ({ nextUrl, prevUrl, setUrl, setPokemonList }) => {
  return (
    <Navbar className="nav" sticky="top" bg="dark" expand="lg" variant="dark">
      {' '}
      <Container fluid>
        <Navbar.Brand className="nav-logo" href="/">
          PokeDex
        </Navbar.Brand>
        {prevUrl && (
          <Button
            onClick={() => {
              setPokemonList([]);
              setUrl(prevUrl);
            }}>
            Previous
          </Button>
        )}
        {nextUrl && (
          <Button
            onClick={() => {
              setPokemonList([]);
              setUrl(nextUrl);
            }}>
            Next
          </Button>
        )}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
