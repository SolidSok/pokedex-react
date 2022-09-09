import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { PokemonList } from './components/pokemonList';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=30';

  const pokeLoad = async () => {
    setLoading(true);
    const res = await axios.get(url);
    getPokemon(res.data.name);
    setLoading(false);
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

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <PokemonList pokemonList={pokemonList} loading={loading} />
        </div>
      )}
    </>
  );
};

export default App;
