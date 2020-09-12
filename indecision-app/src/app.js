class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.getSuggestion = this.getSuggestion.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
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

    this.setState((prevState) => {
      return {
        options: [...prevState.options, option]
      };
    });
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'An app to help you get things done.';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          getSuggestion={this.getSuggestion}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    this.props;
    return (
      <header>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </header>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.getSuggestion} 
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>
          Remove All
        </button>
        {
          this.props.options.map(option => <Option optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.state = {
      error: null
    };
  }

  handleFormSubmission(e) {
    e.preventDefault();
  
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleFormSubmission}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
