import React from 'react';
import PropTypes from 'prop-types';

function PokemonMove(props) {
  return (
    <li>{props.move}</li>
  );
}

PokemonMove.defaultProps = {
  move: '',
};

PokemonMove.propTypes = {
  move: PropTypes.string,
};

export default PokemonMove;
