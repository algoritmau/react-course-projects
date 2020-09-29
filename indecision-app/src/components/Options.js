import React from 'react';
import Option from './Option';

const Options = props => (
  <div className="container">
    <button 
      className="btn btn-link" 
      onClick={props.handleDeleteOptions}
    >
      Remove All
    </button>
    {props.options.length === 0 && <p>Get started by adding an item!</p>}
    {
      props.options.map(option => (
        <Option 
          key={option}
          optionText={option} 
          handleDeleteOption={props.handleDeleteOption} 
        />
      ))
    }
  </div>
);

export default Options;