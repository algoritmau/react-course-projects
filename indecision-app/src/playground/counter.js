const appRoot = document.getElementById('app');

let count = 0;

function addOne() {
  count++;
  renderCounterApp();
}

function minusOne() {
  count--;
  renderCounterApp();
}

function reset() {
  count = 0;
  renderCounterApp();
}

function renderCounterApp() {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  
  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();