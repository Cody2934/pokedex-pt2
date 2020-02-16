import React, { Component } from 'react';
import request from 'superagent';
import PokemonItem from './PokemonItem.js';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    state = { 
        searchQuery: this.props.match.params.name,
        pokemons: [],
     }

     async componentDidMount() {
         if (this.props.match.params.name) {
             const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?name=${this.props.match.params.name}`)
     
             this.setState({ pokemons: data.body.results })
         }
     }

    handleSearch = async (e) => {
        e.preventDefault();

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?name=${this.state.searchQuery}`)

        this.setState({ 
            pokemons: data.body.results, })
        

     this.props.history.push(this.state.searchQuery)

    }

    handleChange = (e) => this.setState({ searchQuery: e.target.value })

    render() {
        return (
        <div className="App">
          <header className="App-header">
            <SearchBar 
                searchQuery={this.state.searchQuery}
                handleSearch={this.handleSearch} 
                handleChange={this.handleChange}
            />
          </header>
          <ul>
              {
                    this.state.pokemons.map(pokemon => 
                    <Link to={`pokemons/${pokemon.name}`}> 
                        <PokemonItem pokemon={pokemon} />
                    </Link>)
              }
          </ul>
        </div>
      );
    }
}