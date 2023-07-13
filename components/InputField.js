import React from 'react';
import PropTypes from 'prop-types';

function InputField({ value }) {
  return <input type="text" value={value} readOnly className="form-control mb-3" />;
}
InputField.propTypes = {
  value: PropTypes.string.isRequired,
};
export default InputField;
