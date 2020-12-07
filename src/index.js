import React from "react";
import ReactDOM from "react-dom";

const rootNode = document.getElementById("root");

const endpoint = "https://api.github.com/users/szaster";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    async function getUser() {
      const response = await fetch(endpoint);
      const data = await response.json();
      setUser(data);
    }
    getUser();
    // fetch(endpoint)
    //   .then((response) => response.json())
    //   .then((data) => setUser(data));
  }, []);

  return user ? (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio} </p>
      <img alt="avatar" src={user.avatar_url} style={{ height: 50 }} />
    </div>
  ) : (
    <p>loading........</p>
  );
}

ReactDOM.render(<App />, rootNode);
