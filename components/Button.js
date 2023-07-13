import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick }) {
  return (
    <div className="col-3">
      <button type="button" onClick={onClick} className="btn btn-primary btn-block mb-2">{label}
      </button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
