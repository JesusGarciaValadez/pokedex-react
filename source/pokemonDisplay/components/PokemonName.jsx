import React from 'react';
import PropTypes from 'prop-types';

function PokemonName(props) {
  return (
    <figcaption>{props.name}</figcaption>
  );
}

PokemonName.defaultProps = {
  name: '',
};

PokemonName.propTypes = {
  name: PropTypes.string,
};

export default PokemonName;
