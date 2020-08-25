import React from "react";
import "./App.scss";
import Device from "./components/Device";
import Background from "./components/Background";

function App() {
  return (
    <div className="app">
      <Device />
      <Background />
    </div>
  );
}

export default App;
