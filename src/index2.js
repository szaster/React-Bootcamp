import React from "react";
import ReactDOM from "react-dom";

const rootNode = document.getElementById("root");

function App() {
  const [developer, setDeveloper] = React.useState({
    name: "",
    language: "python",
    yearsExperience: 0,
    isEmployed: false,
  });
  React.useEffect(() => {
    document.title = developer.name;
    console.log("runs");
  }, [developer.name]);
  //   const [language, setLanguage] = React.useState("python");
  //   const [yearsExperience, setYearsExperience] = React.useState(0);
  //   const [inputValue, setInputValue] = React.useState("");
  //   const inputValue = inputState[0];
  //   const setInputValue = inputState[1];

  //   function handleInputChange(event) {
  //     setInputValue(event.target.value);
  //     console.log(inputValue);
  //   }

  function handleChangeLanguage() {
    setDeveloper({
      language: "Javascript",
      yearsExperience: 0,
    });
  }

  function handleChangeYearsExperience(event) {
    setDeveloper({
      ...developer,
      yearsExperience: event.target.value,
    });
  }

  function handleToggleEmployment() {
    setDeveloper((prevState) => ({
      ...prevState,
      isEmployed: !prevState.isEmployed,
    }));
  }
  function handleChangeName(event) {
    setDeveloper({
      ...developer,
      name: event.target.value,
    });
  }
  return (
    <div>
      <button onClick={handleToggleEmployment}>Toggle Employment Status</button>
      <button onClick={handleChangeLanguage}>Change Language</button>
      <div>
        <input type="number" onChange={handleChangeYearsExperience} />
      </div>
      <div>
        <input
          type="text"
          onChange={handleChangeName}
          placeholder="Change name"
        />
      </div>
      <p>I am learning {developer.language}</p>
      <p>I have {developer.yearsExperience} years of experience.</p>
      <p>
        Employment Status: {developer.isEmployed ? "Employed" : "Unemployed"}
      </p>
      {/* // <input onChange={handleInputChange} />
      // <p>{inputValue}</p> */}
    </div>
  );
}

ReactDOM.render(<App />, rootNode);
