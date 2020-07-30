import React, { Component } from 'react'
import styled from 'styled-components';

import spinner from '../../img/gif/spinner.gif';

const Sprite = styled.img`
  width: 7.5em;
  heigth: 7.5em;
  display: none;
`;
const divW = document.getElementsByClassName('')
const Poke = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0 , 0 , 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

export default class PokemonItem extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonId: '',
    preco: '',
    imageLoading: true,
    toManyRequests: false,
  }

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonId = url.split('/')[url.split('/').length - 2];
    const preco = Math.round(Math.random() * 100);
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png?raw=true`;

    this.setState({ name, imageUrl, preco, pokemonId });
  }

  render() {



    return (
      <div className="col-lg-3 col-xg-2 col-md-4 col-sm-6 mb-4 pokemon">
        <Poke>
          {this.state.imageLoading ? (
            <img src={spinner} style={{ width: '5em', height: '5em' }} 
            className="card-img-top rounded mx-auto d-block mt-w" />

          ) : null}
          <Sprite className="card-img-top rounded mx-auto mt-2"
            src={this.state.imageUrl}
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ toManyRequests: true })}
            style={
              this.state.toManyRequests ? { display: "none" } :
                this.state.imageLoading ? null : { display: "block" }

            }
          />
          {this.state.toManyRequests ? (
            <h6 className="mx-auto">
              <span className="badge badge-danger mt-2">Servidor Ocupado</span>
            </h6>
          ) : null}
          <h5 className="pokemon-name">{this.state.name}</h5>
          <p>Preço: {this.state.preco} Pokécoins</p>
          <button className="mb-4">Adicionar Carrinho</button>
        </Poke>

      </div>
    )
  }
}
