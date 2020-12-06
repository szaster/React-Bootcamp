import React from "react";
import ReactDOM from "react-dom";

const rootNode = document.getElementById("root");

function App() {
  const [developer, setDeveloper] = React.useState({
    language: "python",
    yearsExperience: 0,
  });
  //   const [language, setLanguage] = React.useState("python");
  //   const [yearsExperience, setYearsExperience] = React.useState(0);
  //   const [inputValue, setInputValue] = React.useState("");
  //   const inputValue = inputState[0];
  //   const setInputValue = inputState[1];

  //   function handleInputChange(event) {
  //     setInputValue(event.target.value);
  //     console.log(inputValue);
  //   }
  return (
    <div>
      <button
        onClick={() =>
          setDeveloper({
            language: "Javascript",
            yearsExperience: 0,
          })
        }
      >
        Change Language
      </button>
      <div>
        <input
          type="number"
          onChange={(event) =>
            setDeveloper({
              ...developer,
              yearsExperience: event.target.value,
            })
          }
        />
      </div>
      <p>I am learning {developer.language}</p>
      <p>I have {developer.yearsExperience} years of experience.</p>
      {/* // <input onChange={handleInputChange} />
      // <p>{inputValue}</p> */}
    </div>
  );
}

ReactDOM.render(<App />, rootNode);
