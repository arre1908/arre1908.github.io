import React, { Component } from "react";
import Output from "./Output";
import "../css/Terminal.scss";
import { commands } from "../config";

class Terminal extends Component {
  constructor() {
    super();
    this.state = {
      lines: [],
      input: "",
      suggestions: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.refocus = this.refocus.bind(this);
  }

  handleSubmit(event) {
    // Suggestion was clicked
    if (event.target.textContent) {
      this.setState({ input: event.target.textContent });
    }
    // Autocomplete to first suggestion
    else if (this.state.suggestions.length) {
      this.setState((prevState) => ({ input: prevState.suggestions[0] }));
    }

    // Append input to lines and reset
    this.setState((prevState) => {
      return {
        lines:
          prevState.input === "clear"
            ? []
            : prevState.lines.concat(prevState.input),
        input: "",
        suggestions: [],
      };
    });

    event.preventDefault();
  }

  handleChange(event) {
    // Update input
    let input = event.target.value.trim().toLowerCase();
    this.setState({ input: input });

    // Update list of suggestions
    if (input.length) {
      let suggestions = commands.filter((command) => {
        return command.includes(input);
      });
      this.setState({ suggestions: suggestions });
    } else {
      this.setState({ suggestions: [] });
    }
  }

  refocus() {
    // Scroll to bottom and focus input
    this.suggestionsElem.scrollIntoView();
    this.inputElem.focus();
  }

  componentDidUpdate() {
    this.refocus();
  }

  render() {
    const outputs = this.state.lines.map((line, index) => {
      return <Output key={index} line={line} />;
    });

    const suggestions = this.state.suggestions.map((command, index) => {
      return (
        <button key={index} className="suggestion" onClick={this.handleSubmit}>
          {command}
        </button>
      );
    });

    return (
      <div className="terminal" onClick={this.refocus}>
        <div className="line">
          Hello, welcome to my website! This terminal app was built in React.
        </div>
        <div className="line">
          Type <span className="text-secondary">help</span> and press Enter to
          get a list of commands.
        </div>

        {outputs}

        <div className="line">
          <div className="input-info text-accent">
            <span className="mobile-hidden">me@luisarredondo.com:</span>
            ~$&nbsp;
          </div>
          <div className="input-container">
            <form onSubmit={this.handleSubmit}>
              <input
                ref={(elem) => (this.inputElem = elem)}
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                autoFocus
              />
            </form>
          </div>
        </div>

        <div
          className="suggestions line"
          ref={(elem) => (this.suggestionsElem = elem)}
        >
          {suggestions}
        </div>
      </div>
    );
  }
}

export default Terminal;
