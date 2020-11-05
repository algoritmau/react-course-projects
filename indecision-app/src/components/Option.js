import React from 'react';

const Option = props => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button 
      className="btn-link"
      onClick={() => props.handleDeleteOption(props.optionText)}
    >
      Remove
    </button>
  </div>
);

export default Option;