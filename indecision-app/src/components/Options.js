import React from 'react';
import Option from './Option';

const Options = props => (
  <div className="container">
    <div className="widget__header">
      <h3 className="widget__header__title">Your Options</h3>
      <button 
        className="btn btn-link" 
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__instructions">Get started by adding an item.</p>}
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