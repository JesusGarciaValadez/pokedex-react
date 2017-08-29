import React from 'react';
import PropTypes from 'prop-types';

import PokemonType from '../components/PokemonType';

function PokemonTypes(props) {
  return (
    <ul>
      {props.types
        .map(
          (type) => {
            return <PokemonType type={type.type.name} key={type.type.name} />;
          },
        )
      }
    </ul>
  );
}

PokemonTypes.defaultProps = {
  types: [],
};

PokemonTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonTypes;
