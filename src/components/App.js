import React, { Component } from "react";
import "./app.css";

const TodoList = props => {
  console.log(props);
  return (
    <div>
      <Title name={props.title} />
      <ul>
        {props.todos.map(todo => {
          return <Todo name={todo} />;
        })}
      </ul>
    </div>
  );
};
const Title = props => <h1> {props.name}</h1>;
const Todo = props => <li>{props.name}</li>;
// const todos = ["Buy Milk", "Buy Chicken Rice", "Buy Duck Rice"];
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList
          title="Home List"
          todos={["Buy Milk", "Buy Chicken Rice", "Buy Duck Rice"]}
        />
        <TodoList
          title="Other Home List"
          todos={["Buy Salt", "Study JS", "Buy Drinks"]}
        />
      </div>
    );
  }
}

export default App;
