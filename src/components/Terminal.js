import React, { Component } from "react";
import "../css/Terminal.scss";

class Terminal extends Component {
  constructor() {
    super();
    this.state = {
      lines: [
        "Line ONE",
        "Line TWO",
        "Line THREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
      ],
    };
  }

  render() {
    const lines = this.state.lines.map((line) => {
      return <div className="line">{line}</div>;
    });

    return (
      <div className="terminal">
        <div className="outputs">{lines}</div>
        <div className="input-line">
          <div className="input-info">
            <span className="text-accent">me@luisarredondo.com</span>
            :~$&nbsp;
          </div>
          <div className="input-container">
            <form>
              <input type="text" autoFocus />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Terminal;
