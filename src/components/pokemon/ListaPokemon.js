import React, { Component } from 'react';
import axios from 'axios';

import Pokemon from "./Pokemon";


export default class PokemonsList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <Pokemon 
                key  = { pokemon.id }
                name = { pokemon.name }
                url  = { pokemon.url }
              />
            ))}
          </div>) : (<h1>Carregando Pokemons</h1>)}
      </React.Fragment>
    );
  }
}