import React, { Component } from 'react';
import { getPokemon} from './Api.js'
import PokemonItem from './PokemonItem.js';

export default class Detail extends Component {
    state = { pokemon: {} }

    async componentDidMount() {
        const data = await getPokemon(this.props.match.params.pokeId);
        
        if (data.body.results) {


        this.setState({ pokemon: data.body.results[0] })
            
        }
    }

    render() {
        const { pokemon } = this.state;

        return (
            <PokemonItem pokemon={ pokemon } />
      );
    }
}