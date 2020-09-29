import React from 'react';

const Action = props => (
  <button 
    className="btn btn--big"
    onClick={props.getSuggestion} 
    disabled={!props.hasOptions}
  >
    What Should I Do?
  </button>
);

export default Action;