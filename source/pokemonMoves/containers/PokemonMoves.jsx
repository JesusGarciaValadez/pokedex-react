import React from 'react';
import PropTypes from 'prop-types';

import PokemonMove from '../components/PokemonMove';

function PokemonMoves(props) {
  return (
    <ul>
      {props.moves
        .map(
          (move) => {
            return (<PokemonMove move={move.move.name} key={move.move.name} />);
          },
        )
      }
    </ul>
  );
}

PokemonMoves.defaultProps = {
  moves: [],
};

PokemonMoves.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonMoves;
