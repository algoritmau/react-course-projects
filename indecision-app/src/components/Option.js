import React from 'react';

const Option = props => (
  <div>
    {props.optionText}
    <button 
      className="btn-link"
      onClick={() => props.handleDeleteOption(props.optionText)}
    >
      Remove
    </button>
  </div>
);

export default Option;