import React from "react";
import ReactDOM from "react-dom";

const rootNode = document.getElementById("root");

function App() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(event) {
    setMousePosition({ x: event.pageX, y: event.pageY });
  }
  return (
    <div>
      <p>
        {" "}
        X: {mousePosition.x}, Y:{mousePosition.y}
      </p>
    </div>
  );
}

ReactDOM.render(<App />, rootNode);

function NewPage() {
  return <div> new page</div>;
}
setTimeout(() => ReactDOM.render(<NewPage />, rootNode), 2000);
