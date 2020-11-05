const detailsText = "Incidunt ut architecto nisi harum inventore itaque facere ut. Harum atque recusandae a architecto sit dolores sint doloribus molestias. Qui ducimus facilis. Aliquam fugiat laborum sunt rerum voluptatem consectetur quia molestias.";

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      areDetailsShown: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        areDetailsShown: !prevState.areDetailsShown
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.areDetailsShown ? 'Hide' : 'Show'} Details</button>
        <p>{this.state.areDetailsShown ? detailsText : ''}</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
