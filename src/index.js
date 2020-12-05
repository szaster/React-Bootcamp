import React from "react";
import ReactDOM from "react-dom";

const rootNode = document.getElementById("root");

function App() {
  const [language, setLanguage] = React.useState("python");
  //   const [inputValue, setInputValue] = React.useState("");
  //   const inputValue = inputState[0];
  //   const setInputValue = inputState[1];

  //   function handleInputChange(event) {
  //     setInputValue(event.target.value);
  //     console.log(inputValue);
  //   }
  return (
    <div>
      <button onClick={() => setLanguage("Javascript")}>Change Language</button>
      <p>I am learning {language}</p>
      {/* // <input onChange={handleInputChange} />
      // <p>{inputValue}</p> */}
    </div>
  );
}

ReactDOM.render(<App />, rootNode);
