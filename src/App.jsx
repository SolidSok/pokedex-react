import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { PokeNav } from './components/navbar';
import { PokemonCard } from './components/pokemonCard';
import { PokemonView } from './components/pokemonView';
const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=32');

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
    <Router>
      <Container fluid>
        {' '}
        <PokeNav
          setPokemonList={setPokemonList}
          setUrl={setUrl}
          nextUrl={nextUrl}
          prevUrl={prevUrl}
        />
        <Row>
          <Route
            exact
            path="/"
            render={() => {
              return loading ? (
                <h1 className="loading">Loading...</h1>
              ) : (
                pokemonList.map(p => (
                  <Col md={6} lg={4} xl={3} key={p.name}>
                    <PokemonCard pokemon={p} />
                  </Col>
                ))
              );
            }}
          />
          <Route
            path="/:name"
            render={({ match, history }) => {
              return (
                <PokemonView
                  pokemonList={pokemonList}
                  pokemon={pokemonList.find(
                    pokemon => pokemon.name === match.params.name
                  )}
                  onBackClick={() => history.goBack()}
                />
              );
            }}
          />
        </Row>
      </Container>
    </Router>
  );
};

export default App;
