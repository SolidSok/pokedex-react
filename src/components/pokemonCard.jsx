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
          src={pokemon.sprites.front_default}
        />

        <Card.Body>
          {pokemon.id}
          <Card.Title>{pokemon.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}
