import React from 'react';
import { Col } from 'react-bootstrap';

import { PokemonCard } from './cards/pokemonCard';

export function PokemonList(props) {
  const { loadDetails, pokemonList } = props;
  return (
    <>
      {pokemonList.map(p => (
        <Col md={6} lg={4} xl={3} key={p.name}>
          <PokemonCard pokemon={p} loadDetails={loadDetails} />
        </Col>
      ))}
    </>
  );
}
