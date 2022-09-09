import React from 'react';
import './App.css';
import { PokemonList } from './components/views/pokemonView';

function App() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  const add = pokemon => {
    if (typeof pokeom === 'object' && 'name' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('Invalid Data');
    }
  };

  const loadList = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      json.results.forEach(element => {
        let pokemon = {
          name: element.name,
          detailsUrl: element.url,
        };
        add(pokemon);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const loadDetails = async item => {
    let url = item.detailsUrl;
    try {
      const response = await fetch(url);
      const details = await response.json();
      item.imageUrlFront = details.sprites.front_default;
      item.imageUrlBack = details.sprites.back_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
      item.abilities = details.abilities;

      let types = [];
      details.types.forEach(pokemon => types.push(pokemon.type.name));
      item.types = types;
      let abilities = [];
      details.abilities.forEach(pokemon_1 =>
        abilities.push(pokemon_1.ability.name)
      );
      item.abilities = abilities;
    } catch (e) {
      console.error(e);
    }
  };

  loadList();

  if ((pokemonList = [])) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <PokemonList pokemonList={pokemonList} loadDetails={loadDetails} />
    </div>
  );
}

export default App;
