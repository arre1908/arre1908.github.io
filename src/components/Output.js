import React from "react";
import { links } from "../config";
import "../css/Output.scss";

function createOutput(line) {
  switch (line.toLowerCase()) {
    case "help":
      return (
        <div className="line">
          <span className="text-secondary">me</span> - Show all info.
          <br />
          <span className="text-secondary">resume</span> - Show link to resume.
          <br />
          <span className="text-secondary">linkedin</span> - Show link to
          LinkedIn profile.
          <br />
          <span className="text-secondary">github</span> - Show link to Github
          profile.
          <br />
          <span className="text-secondary">email</span> - Show email address.
          <br />
          <span className="text-secondary">clear</span> - Clear the console
          output.
        </div>
      );
    case "resume":
      return (
        <div className="line">
          <a href={links.resume} target="_blank" rel="noopener noreferrer">
            Google Drive
          </a>
        </div>
      );
    case "linkedin":
      return (
        <div className="line">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      );
    case "github":
      return (
        <div className="line">
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      );
    case "email":
      return (
        <div className="line">
          <a
            href={`mailto:${links.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {links.email}
          </a>
        </div>
      );
    case "me":
      return (
        <div className="me">
          <h1>Luis Arredondo</h1>
          <a href={links.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          {" | "}
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" | "}
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            Github
          </a>
          {" | "}
          <a
            href={`mailto:${links.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      );
    case "":
      return "";
    default:
      return <div>Unknown command: '{line}'</div>;
  }
}

function Output(props) {
  return (
    <div>
      <div className="line">
        <span className="text-accent">me@luisarredondo.com</span>
        {":~$ "}
        {props.line}
      </div>
      {createOutput(props.line)}
    </div>
  );
}

export default Output;
