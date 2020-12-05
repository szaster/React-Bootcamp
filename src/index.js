import React from "react";
import ReactDOM from "react-dom";

const rootNode = document.getElementById("root");

function App() {
  const [language, setLanguage] = React.useState("python");
  const [yearsExperience, setYearsExperience] = React.useState(0);
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
      <div>
        <input
          type="number"
          onChange={(event) => setYearsExperience(event.target.value)}
        />
      </div>
      <p>I am learning {language}</p>
      <p>I have {yearsExperience} years of experience.</p>
      {/* // <input onChange={handleInputChange} />
      // <p>{inputValue}</p> */}
    </div>
  );
}

ReactDOM.render(<App />, rootNode);
