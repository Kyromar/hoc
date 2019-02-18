import React from "react";
import ReactDOM from "react-dom";
import AdminInfo from "./hoc";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <AdminInfo isAdmin={false} info="there are the details" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
