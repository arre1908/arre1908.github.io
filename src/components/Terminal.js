import React, { Component } from "react";
import Output from "./Output";
import "../css/Terminal.scss";

class Terminal extends Component {
  constructor() {
    super();
    this.state = {
      lines: [],
      input: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.setState((prevState) => {
      return {
        lines:
          prevState.input.toLowerCase() === "clear"
            ? []
            : prevState.lines.concat(prevState.input),
        input: "",
      };
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  componentDidUpdate() {
    // Refocus input and scroll to bottom
    this.input.blur();
    this.input.focus();
  }

  render() {
    const outputs = this.state.lines.map((line, index) => {
      return <Output key={index} line={line} />;
    });

    return (
      <div className="terminal">
        <div className="line">
          Hello, welcome to my website! This terminal app was built in React.
        </div>
        <div className="line">
          Type 'help' and press Enter to get a list of commands.
        </div>

        {outputs}

        <div>
          <div className="input-info">
            <span className="text-accent">me@luisarredondo.com</span>
            :~$&nbsp;
          </div>
          <div className="input-container">
            <form onSubmit={this.handleSubmit}>
              <input
                ref={(input) => (this.input = input)}
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                onBlur={(event) => event.target.focus()}
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Terminal;
