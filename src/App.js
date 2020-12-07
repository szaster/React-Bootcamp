import React from "react";
import Login from "./components/Login";

function App() {
  const [] = React.useState("");
  React.useEffect(() => {}, []);

  if (!user) {
    return <Login />;
  }
  return (
    <div>
      <p></p>
    </div>
  );
}
export default App;
