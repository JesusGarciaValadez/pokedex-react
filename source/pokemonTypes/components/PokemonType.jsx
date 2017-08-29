import React from 'react';
import PropTypes from 'prop-types';

function PokemonType(props) {
  return (
    <li>{props.type}</li>
  );
}

PokemonType.defaultProps = {
  type: '',
};

PokemonType.propTypes = {
  type: PropTypes.string,
};

export default PokemonType;
