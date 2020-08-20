import React from "react";
import "./App.css";
import Device from "./components/Device";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div className="app flex-center">
      <Device />
      <Keyboard />
    </div>
  );
}

export default App;
