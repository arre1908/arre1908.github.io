import React from "react";
import Terminal from "./Terminal";
import "../css/Device.scss";

function Device() {
  return (
    <div className="container flex-center">
      <div className="device">
        <div className="screen">
          <Terminal />
        </div>
      </div>
      <div className="keyboard">
        <div className="keyboard-grip"></div>
      </div>
    </div>
  );
}

export default Device;
