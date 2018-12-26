console.log("App.js is running");

//JSX - JavaScript XML

let app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

let template = (
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

let user = {
  name: 'Nacho',
  age: '6',
  location: 'New York'
}

function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>
  }
}

let templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonimous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);