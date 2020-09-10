class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'An app to help you get things done.';
    const options = ['Thing 1', 'Thing 2', 'Thing 3'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    alert('handlePick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  // Use own constructor to bind "this"
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>
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
  handleFormSubmission(e) {
    e.preventDefault();
  
    const option = e.target.elements.option.value.trim();
    
    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));