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
// const isReactUser = false;
function Signout() {
  return <button>Signout</button>;
}

const rootNode = document.getElementById("root");

function Login() {
  return <p>Please login!</p>;
}

const isAuthenticated = true;

ReactDOM.render(
  <Layout>
    {isAuthenticated ? <Header username="Jane" /> : <Login />}
    {isAuthenticated && <Signout />}
    <footer>Copyright 2020</footer>
  </Layout>,
  rootNode
);
