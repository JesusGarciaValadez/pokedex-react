import React from 'react';
import PropTypes from 'prop-types';

function Error(props) {
  return (
    <p>Pokémon {props.detail}</p>
  );
}

Error.defaultProps = {
  detail: '',
};

Error.propTypes = {
  detail: PropTypes.string,
};

export default Error;
