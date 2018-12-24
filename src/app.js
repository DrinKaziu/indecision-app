console.log("App.js is running");

//JSX - JavaScript XML
let template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info!!!</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

let templateTwo = (
  <div>
    <h1>Drin Kaziu</h1>
    <p>Age: 36</p>
    <p>Location: New York</p>
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);