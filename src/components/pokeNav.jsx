import React from 'react';
import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';

export const PokeNav = ({
  nextUrl,
  prevUrl,
  setUrl,
  setPokemonList,
  setFilter,
  filter,
}) => {
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
            Previous 32
          </Button>
        )}
        {nextUrl && (
          <Button
            onClick={() => {
              setPokemonList([]);
              setUrl(nextUrl);
            }}>
            Next 32
          </Button>
        )}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto"></Nav>
          <Form.Control
            onChange={e => {
              setFilter(e.target.value);
            }}
            value={filter}
            placeholder="Find your Pokemon"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
