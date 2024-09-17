import React from "react";
import PropTypes from "prop-types";

function FunctionValidate1(props) {
  
  return (
    <>
      <p>example no. 2</p>
      <p>
        {props.example.p1} {props.example.p2}
      </p>
    </>
  );
}

export default FunctionValidate1;

FunctionValidate1.propTypes = {
  example: PropTypes.shape({
    p1: PropTypes.string.isRequired,
    p2: PropTypes.number.isRequired,
  })
};
