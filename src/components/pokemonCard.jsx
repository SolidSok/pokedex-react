import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function PokemonCard(props) {
  const { pokemon } = props;
  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Link to={`/${pokemon.name}`}>
          {' '}
          <Card.Img
            className="pokemonPoster"
            variant="top"
            crossOrigin="anonymous"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          />
        </Link>

        <Card.Body>
          <Card.Title>
            {' '}
            #{pokemon.id} {pokemon.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}
