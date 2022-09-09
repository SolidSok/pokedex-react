import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function PokemonCard(props) {
  const { pokemon } = props;
  return (
    <Col>
      <Card>
        <Link to={`/pokemon`}>
          <Card.Img
            className="pokemonPoster"
            variant="top"
            crossOrigin="anonymous"
            src={pokemon.ImagePath}
          />
        </Link>

        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}
