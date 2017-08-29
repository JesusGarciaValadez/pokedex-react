import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button id={props.id}>{props.legend}</button>
  );
}

Button.defaultProps = {
  id: '',
  legend: '',
};

Button.propTypes = {
  id: PropTypes.string,
  legend: PropTypes.string,
};

export default Button;
