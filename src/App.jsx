import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import './App.css';
import { PokeNav } from './components/navbar';
import { PokemonList } from './components/pokemonList';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=30');

  const pokeLoad = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
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
    <Container fluid>
      {' '}
      <PokeNav />
      <Row>
        <div className="prev-next">
          {prevUrl && (
            <Button
              onClick={() => {
                setPokemonList([]);
                setUrl(prevUrl);
              }}>
              Previous
            </Button>
          )}
          {nextUrl && (
            <Button
              onClick={() => {
                setPokemonList([]);
                setUrl(nextUrl);
              }}>
              Next
            </Button>
          )}
        </div>
      </Row>
      <Row>
        {' '}
        <PokemonList pokemonList={pokemonList} loading={loading} />
      </Row>
    </Container>
  );
};

export default App;
