import React from "react";
import "./App.scss";
import Device from "./components/Device";
import Keyboard from "./components/Keyboard";
import Background from "./components/Background";

function App() {
  return (
    <div className="app flex-center">
      <Device />
      <Keyboard />
      <Background />
    </div>
  );
}

export default App;
