import React from 'react';
import './App.css';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
} from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import PokemonList from './components/pokemonlist/PokemonList';
import PokemonDetail from './components/pokemondetail/PokemonDetail';
import MyPokemonList from './components/mypokemonlist/MyPokemonList';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path='/' exact render={(props) => <Home /> } />
        <Route path='/pokemons' component={PokemonList} />
        <Route path='/pokemon/:name' render={(props) => <PokemonDetail name={props} /> } />
        <Route path='/mylist' component={MyPokemonList} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
