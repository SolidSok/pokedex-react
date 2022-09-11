import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

export function PokemonView(props) {
  const { pokemon, onBackClick } = props;
  let types = [];
  pokemon.types.forEach(pokemon => {
    types.push(pokemon.type.name);
  });
  let abilities = [];
  pokemon.abilities.forEach(pokemon => {
    abilities.push(pokemon.ability.name);
  });
  return (
    <Col>
      <Card style={{ width: '18rem' }}>
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
          <p>Height: {pokemon.height} dm</p>
          <p>Wight: {pokemon.weight} hg</p>
          <p>Types: {types.join(', ')}</p>
          <p>Abilities: {abilities.join(', ')}</p>
        </Card.Body>
        <div>
          <Button
            variant="warning"
            onClick={() => {
              onBackClick(null);
            }}>
            Back
          </Button>
        </div>
      </Card>
    </Col>
  );
}
export default PokemonView;
