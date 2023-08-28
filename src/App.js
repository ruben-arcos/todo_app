// create a class-based component
import React from 'react';
import './App.css';

class App extends React.Component { // extend to use the methods of the parent Component
  constructor(props) {
    super(props) // access the parent properties

    //concept of state - keeping track of the data
    this.state = {
      // set the key/values I want to track
      todos: [],
      text: "",
      isClicked: false
    }

    // we need to bind here first
    // this.handleClick = this.handleClick.bind(this)

  } // end of constructor

  // add a button that fires handleSubmit when clicked
  // add an h1 or p with ternary operator to confirm the toggle works

  // remember this and bind?
  // we've lost the bind because we're rendering outside of the scope of the class
  // use arrow function to solve the bind problem
  // because arrow function does not get their own 'this' keyword - they inherit from the parent
  handleClicked = () => {
    this.setState({
      // isClicked: true // this works only once
        isClicked: !this.state.isClicked  // to toggle, we negate the state every time the button is clicked
    })
  }

  // capture the changes in the text input field
  handleChange = (event) => {
    this.setState ({
        text: event.target.value
      })
  }

// submit button that adds a todo to the todo array

handleSubmit = () => {
  this.setState({
   // todos: [this.state.text]  // at this point it doesn't clear the text field and it overwrites the previous todos

  //  use spread to get all the existing todos first
   todos: [...this.state.todos, this.state.text], 
   text: ""
  })
}

  // now let's add a text input to render/return and a function that handles the state change of the input

  render() { // in clasess, you have to wrap the return in a render method
    return (
      <div className='App'>
        <h1>my todos</h1>
        <input type='text' onChange={(this.handleChange)} value={this.state.text}></input>
        <button onClick={this.handleSubmit}>add todo</button>
        
        {/* <h1>{this.state.isClicked ? "clicked" : "not clicked"}</h1>
        <button onClick={this.handleClicked}>click me</button> */}

        <ul>
          {this.state.todos.map((todo) => {
            return <li key={todo.id}>{todo}</li>
          })}
        </ul>
      </div>
    );
  }

} // end of class


      
    

export default App;
