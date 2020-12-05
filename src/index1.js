import React from "react";
import ReactDOM from "react-dom";

function Header(props) {
  return <h1>Hello {props.username}!</h1>;
}

function Layout(props) {
  return <div style={{ background: "palegoldenrod" }}>{props.children}</div>;
}
// class Header extends React.Component {
//   render() {
//     return <h1>Hello!</h1>;
//   }
// }

const year = 2020;
const greeting = <div>Hello in {year}!</div>;

const rootNode = document.getElementById("root");

const isAuthenticated = true;

function App() {
  const people = ["John", "Dave", "Jane"];

  function handleInputChange(event) {
    const inputValue = event.target.value;
    console.log(inputValue);
  }
  return (
    <ul>
      {people.map((person, i) => (
        <Person key={i} person={person} />
      ))}
      <input onChange={handleInputChange} />
    </ul>
  );
}

function Person(props) {
  function handlePersonClick(event) {
    alert(props.person);
    console.log(event);
  }
  return <li onClick={handlePersonClick}>{props.person}</li>;
}

ReactDOM.render(<App />, rootNode);
