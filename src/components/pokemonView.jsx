import React from 'react';
import { Card, Col } from 'react-bootstrap';

export function PokemonView(props) {
  const { pokemon } = props;
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          crossOrigin="anonymous"
          src={pokemon.imageUrlFront}
        />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>Height: {pokemon.height}</Card.Text>
          <Card.Text>Types: {pokemon.types} </Card.Text>
          <Card.Text>Weight: {pokemon.weight} </Card.Text>
          <Card.Text>abilities: {pokemon.abilities} </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
