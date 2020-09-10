const appRoot = document.getElementById('app');

const app = {
  title: "Indecision App",
  subtitle: "An app to get your stuff done.",
  options: [],
};

function handleFormSubmission(e) {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
}

const numbers = [88, 108, 1001];

function removeAllOptions() {
  app.options = [];
  renderApp();
}

function getSuggestion() {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const optionToSuggest = app.options[randomNumber];
  alert(optionToSuggest);
}

function renderApp() {
  const template = (
    <div>
      <h1>{ app.title }</h1>
      { app.subtitle && <p>{ app.subtitle }</p> }
      <p>{ (app.options && app.options.length > 0) ? "Here are your options:" : "No options." }</p>
      <button onClick={getSuggestion} disabled={app.options.length == 0}>What should I do?</button>
      <button onClick={removeAllOptions}>Remove All</button>
      <ol>
        {
          app.options.map(option => <li>{option}</li>)
        }
      </ol>
      <form onSubmit={handleFormSubmission}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
}

renderApp();