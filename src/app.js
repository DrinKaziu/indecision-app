console.log("App.js is running");

//JSX - JavaScript XML

let app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

let user = {
  name: 'Nacho',
  age: '6',
  location: 'New York'
}


let templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);