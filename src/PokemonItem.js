// page that displays the pokemon themselves
import React from 'react'

export default class PokemonItem extends React.Component {
    render() {
        // const { pokemon } = this.props;
        
        
        return (
            <div className="thePoke">

            {/* Pokemon Name */}
            <h2 className="pokeName">{this.props.pokemon.pokemon}</h2>

            {/* Pokemon Image */}
            <img className="pokePics" src={this.props.pokemon.url_image}/>

            {/* Pokemon HP */}
            <p className="pokeInfo">HP: {this.props.pokemon.hp}</p>

            {/* Pokemon Attack */}
            <p className="pokeInfo">Attack: {this.props.pokemon.attack}</p>

            {/* Pokemon Defense */}
            <p className="pokeInfo">Defense: {this.props.pokemon.defense}</p>
            
            {/* Pokemon Speed */}
            <p className="pokeInfo">Speed: {this.props.pokemon.speed}</p>

            {/* Pokemon Type */}
            <p className="pokeInfo">Type: {this.props.pokemon.type_1}</p>

        </div>
        
        )
    }
}