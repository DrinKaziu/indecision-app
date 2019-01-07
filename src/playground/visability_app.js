class Visability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visability: false
    }

    this.handleVisabilityToggle = this.handleVisabilityToggle.bind(this);
  } 

  handleVisabilityToggle() {
    this.setState((prevState) => {
      return {
        visability: !prevState.visability
      }
    })
  } 

  render() {
    return (
      <div>
        <h1>Visability Toggle</h1>
        <button onClick={this.handleVisabilityToggle}>
          {this.state.visability ? 'hide details' : 'show details'}
        </button>
        {this.state.visability && <p>This are some details that are now visible</p>}
      </div>
    )
  }
}

ReactDOM.render(<Visability />, document.getElementById('app'));




// console.log('Visability App is running');

// let visability = false;

// const toggleVisability = () => {
//   visability = !visability
//   render();
// }; 

// const showDetails = () => {
//   details.push('Some details are shown here');
//   render();
// }

// const hideDetails = () => {
//   details = [];
//   render();
// }

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visability Toggle</h1>
//       <button onClick={toggleVisability}>
//         {visability ? 'Hide Details' : 'Show Details'}
//       </button>
//       {visability && <p>These are some details that are now visible!!</p>}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();