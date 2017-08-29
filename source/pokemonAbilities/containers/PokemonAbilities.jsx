import React from 'react';
import PropTypes from 'prop-types';

import PokemonAbility from '../components/PokemonAbility';

function PokemonAbilities(props) {
  return (
    <ul>
      {props.abilities
        .map(
          (ability) => {
            return <PokemonAbility ability={ability.ability.name} key={ability.ability.name} />;
          },
        )
      }
    </ul>
  );
}

PokemonAbilities.defaultProps = {
  abilities: [],
};

PokemonAbilities.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonAbilities;
