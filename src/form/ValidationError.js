import React from "react";

const ValidationError = props => {
  if (props.errors) {
    return props.errors.map(err => {
      <h6 className="text-danger" key={err}>
        {err}
      </h6>
    })
  }
  return null

};

export default ValidationError;
