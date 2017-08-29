import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Error from './error/components/Error';
import Loading from './loading/components/Loading';
import Button from './shared/components/Button';
import PokemonDisplay from './pokemonDisplay/containers/PokemonDisplay';
import PokemonTypes from './pokemonTypes/containers/PokemonTypes';
import PokemonAbilities from './pokemonAbilities/containers/PokemonAbilities';
import PokemonMoves from './pokemonMoves/containers/PokemonMoves';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      id: 1,
      name: '',
      image: '',
      types: [],
      level: 0,
      abilities: [],
      moves: [],
      error: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    this.getPokemon(this.state.id);
  }

  componentDidMount() {
    // document.getElementById('prev').addEventListener('click', this.handleClick);
    // document.getElementById('next').addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    // document.getElementById('prev').removeEventListener('click');
    // document.getElementById('next').removeEventListener('click');
  }

  async getPokemon(id = null) {
    const pokemonID = id || this.state.id;

    this.setState({
      loading: true,
    });

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`);
    const pokemon = await response.json();
    if (pokemon.detail) {
      this.setState = {
        loading: false,
        error: pokemon.detail,
      };

      return false;
    }

    console.log(pokemon);
    this.setState = {
      loading: false,
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      types: pokemon.types,
      level: pokemon.base_experience,
      abilities: pokemon.abilities,
      moves: pokemon.moves,
    };

    return true;
  }

  handleClick(event) {
    event.preventDefault();
    console.log('click');

    let pokemonID = (event.target.id === 'prev') ? this.state.id - 1 : this.state.id + 1;
    pokemonID = (pokemonID <= 0) ? 1 : pokemonID;

    this.getPokemon(pokemonID);
  }

  handleSearch(event) {
    event.preventDefault();
    const pokemonID = document.getElementById('pokemonID').value;

    console.log(pokemonID);
    this.getPokemon(pokemonID);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <section>
        {this.state.error &&
          <Error detail={this.state.error} />
        }
        <h1>{this.props.title}</h1>
        <PokemonDisplay name={this.state.name} image={this.state.image} />
        <h2>Tipo:</h2>
        <PokemonTypes types={this.state.types} />
        <Button id={this.props.prev} legend={this.props.prevName} onClick={this.handleClick} />
        <form method="GET">
          <input type="text" id="pokemonID" placeholder="Escribe el ID del Pokémon que quieres buscar" />
          <button type="submit" id="submit" onClick={this.handleSearch}>Buscar</button>
        </form>
        <Button id={this.props.next} legend={this.props.nextName} onClick={this.handleClick} />
        <h3>{this.props.abilitiesTitle}</h3>
        <PokemonAbilities abilities={this.state.abilities} />
        <h4>{this.props.movesTitle}</h4>
        <PokemonMoves moves={this.state.moves} />
      </section>
    );
  }
}

Pokemon.defaultProps = {
  prev: 'prev',
  next: 'next',
  prevName: 'Anterior',
  nextName: 'Siguiente',
  title: 'Nombre del Pokémon',
  abilitiesTitle: 'Habilidades disponibles',
  movesTitle: 'Movimientos disponibles',
};

Pokemon.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
  prevName: PropTypes.string,
  nextName: PropTypes.string,
  title: PropTypes.string,
  abilitiesTitle: PropTypes.string,
  movesTitle: PropTypes.string,
};

ReactDOM.render(
  <Pokemon />,
  document.getElementById('pokemon'),
);
