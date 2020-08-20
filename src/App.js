import React from "react";
import "./App.scss";
import Device from "./components/Device";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="app flex-center">
      <div className="container flex-center">
        <Device />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
