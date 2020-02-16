import React from 'react'

export default class PokemonItem extends React.Component {
    render() {
        const { pokemon } = this.props;
        const {
            image_url,
            attack, 
            defense
        } = pokemon;

        return (
            <>
            { pokemon.name 
            ? <div>
                    <p><img src={ image_url } /></p>
                    <p>Attack: { attack }</p>
                    <p>Defense: { defense }</p>
                </div>
        : <img src="https://pixelpapa.com/wp-content/uploads/2018/11/Flat-Preloaders.gif" />
        }
        </>
        )
    }
}