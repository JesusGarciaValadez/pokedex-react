import React from 'react';
import PropTypes from 'prop-types';

function PokemonAbility(props) {
  return (
    <li>{props.ability}</li>
  );
}

PokemonAbility.defaultProps = {
  ability: '',
};

PokemonAbility.propTypes = {
  ability: PropTypes.string,
};

export default PokemonAbility;
