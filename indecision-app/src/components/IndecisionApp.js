import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.getSuggestion = this.getSuggestion.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const optionsFromLocalStorage = JSON.parse(localStorage.getItem('Options'));
  
      if (optionsFromLocalStorage) {
        this.setState(() => ({ options: optionsFromLocalStorage }));
      }
    } catch (error) {
      throw new Error('Malformed JSON!');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      const localStorageOptions = JSON.stringify(this.state.options);
      localStorage.setItem('Options', localStorageOptions);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  getSuggestion() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const suggestion = this.state.options[randomNumber];
    alert(suggestion);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Please enter a valid option to add!';
    } else if ( this.state.options.includes(option) ) {
      return `Oops! The option "${option}" already exists.`;
    }

    this.setState((prevState) => ({ 
      options: [...prevState.options, option]
    }));
  }

  render() {
    const subtitle = 'An app to help you get things done.';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          getSuggestion={this.getSuggestion}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}