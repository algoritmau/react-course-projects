class IndecisionApp extends React.Component {
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

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </header>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
        <button 
          onClick={props.getSuggestion} 
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>
        Remove All
      </button>
      {props.options.length === 0 && <p>Get started by adding an item!</p>}
      {
        props.options.map(option => (
          <Option 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption} 
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={() => props.handleDeleteOption(props.optionText)}>
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.state = { error: null };
  }

  handleFormSubmission(e) {
    e.preventDefault();
  
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
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
