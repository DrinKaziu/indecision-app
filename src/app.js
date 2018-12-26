console.log("App.js is running");

//JSX - JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

let count = 0; 

const addOne = () => {
  console.log('Add One');
};

const minusOne = () => {
  console.log('Minus One');
}

const reset = () => {
  console.log('Reset');
}

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
)
console.log(templateTwo);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);