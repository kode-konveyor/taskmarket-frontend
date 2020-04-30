import React from "react";
import PropTypes from "prop-types";

export default function CloseButton({ onClose }) {
  return (
    <input
      type="button"
      value="X"
      onClick={onClose}
      className="button close-button"
    />
  );
}

CloseButton.propTypes = {
  onClose: PropTypes.func,
};
