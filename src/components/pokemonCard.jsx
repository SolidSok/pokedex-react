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
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        />

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
