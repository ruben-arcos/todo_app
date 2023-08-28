// create a class-based component
import React from "react";
import { nanoid } from "nanoid";
import "./App.css";

class App extends React.Component {
  // extend to use the methods of the parent Component
  constructor(props) {
    super(props); // access the parent properties

    //concept of state - keeping track of the data
    this.state = {
      // set the key/values I want to track
      todos: [
        { id: 1, text: "walk the dog" },
        { id: 2, text: "feed the fish" },
      ],
      text: "",
      isClicked: false,
    };

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
      isClicked: !this.state.isClicked, // to toggle, we negate the state every time the button is clicked
    });
  };

  // capture the changes in the text input field
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  // submit button that adds a todo to the todo array

  // capture the changes in the text input field
  handleSubmit = () => {
    this.setState({
      // todos: [this.state.text]  // at this point it doesn't clear the text field and it overwrites the previous todos

      //  use spread to get all the existing todos first
      todos: [...this.state.todos, { id: nanoid(), text: this.state.text }],
      text: "",
    });
  };

  handleDelete = (id) => {
    // console.log(id); // checking for right id

    // get the todo by its index
    const index = this.state.todos.findIndex((todo) => todo.id === id);
    console.log(index);

    // make a copy of the array to work with (don't mutate directly)
    const copy = [...this.state.todos];

    // splice put the 1 todo at that index
    copy.splice(index, 1);

    // update state of todos with the copy
    this.setState({
      todos: copy,
    });
  };

  /**
   *
   * @returns deleting a todo is a little different because we need to know which todo to remove
   * so each needs an id
   * so if a todo is now and id and text, what do i do?
   */

  // now let's add a text input to render/return and a function that handles the state change of the input

  render() {
    // in clasess, you have to wrap the return in a render method
    return (
      <div className="App">
        <h1>my todos</h1>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        ></input>
        <button onClick={this.handleSubmit}>add todo</button>

        {/* <h1>{this.state.isClicked ? "clicked" : "not clicked"}</h1>
        <button onClick={this.handleClicked}>click me</button> */}

        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => this.handleDelete(todo.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
} // end of class

export default App;
