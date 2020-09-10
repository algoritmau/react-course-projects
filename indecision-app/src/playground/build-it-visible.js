const appRoot = document.getElementById('app');
const detailsText = "Incidunt ut architecto nisi harum inventore itaque facere ut. Harum atque recusandae a architecto sit dolores sint doloribus molestias. Qui ducimus facilis. Aliquam fugiat laborum sunt rerum voluptatem consectetur quia molestias. Neque est ipsa qui qui ipsa sint.";
let areDetailsShown = false;

function toggleDetails() {
  areDetailsShown = !areDetailsShown;
  renderApp();
}

function renderApp() {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>
        {`${areDetailsShown ? "Hide" : "Show"} Details`}
      </button>
      <p>{ areDetailsShown ? detailsText : "" }</p>
    </div>
  );
  
  ReactDOM.render(template, appRoot);
}

renderApp();