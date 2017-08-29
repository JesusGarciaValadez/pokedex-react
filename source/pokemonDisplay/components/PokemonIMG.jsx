import React from 'react';
import PropTypes from 'prop-types';

function PokemonIMG(props) {
  return (
    <img src={props.image} alt={props.name} />
  );
}

PokemonIMG.defaultProps = {
  image: '',
  name: '',
};

PokemonIMG.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default PokemonIMG;
