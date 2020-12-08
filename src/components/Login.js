import React from "react";
//ESX object destructuring
function Login({ setUser }) {
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    //prevents a page from autorefreshing
    event.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Input username"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
