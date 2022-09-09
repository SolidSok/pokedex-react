import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { PokemonList } from './components/pokemonList';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=30';

  const pokeLoad = () => {
    axios.get(url).then(res => {
      getPokemon(res.data.results);
    });
  };
  const getPokemon = async res => {
    res.map(async item => {
      const result = await axios.get(item.url);
      setPokemonList(state => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeLoad();
  }, [url]);
  console.log(pokemonList);

  return (
    <>
      {/* {loading ? (
        <h1>loading...</h1>
      ) : ( */}
      <div>
        <PokemonList pokemonList={pokemonList} loading={loading} />
      </div>
      {/* )} */}
    </>
  );
};

export default App;
