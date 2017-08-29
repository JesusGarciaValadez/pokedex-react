import React from 'react';
import PropTypes from 'prop-types';

import PokemonIMG from '../components/PokemonIMG';
import PokemonName from '../components/PokemonName';

function PokemonDisplay(props) {
  return (
    <figure>
      <PokemonIMG name={props.name} image={props.image} />
      <PokemonName name={props.name} />
    </figure>
  );
}

PokemonDisplay.defaultProps = {
  name: '',
  image: '',
};

PokemonDisplay.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default PokemonDisplay;
