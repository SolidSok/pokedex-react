import React from 'react';
import { Card, Col } from 'react-bootstrap';

export function PokemonCard(props) {
  const { pokemon } = props;
  return (
    <Col>
      <Card>
        <Card.Img
          className="pokemonPoster"
          variant="top"
          crossOrigin="anonymous"
          src={pokemon.ImagePath}
        />

        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}
