import React from 'react';
import { Col } from 'react-bootstrap';

import { PokemonCard } from './pokemonCard';

export function PokemonList(props) {
  const { pokemonList } = props;
  return (
    <>
      {pokemonList.map(p => (
        <Col md={6} lg={4} xl={3} key={p.name}>
          <PokemonCard pokemon={p} />
        </Col>
      ))}
    </>
  );
}
