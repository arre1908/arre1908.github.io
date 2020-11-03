import React from "react";
import { links, descriptions } from "../config";
import "../css/Output.scss";

function createOutput(line) {
  switch (line) {
    case "help":
      return (
        <div>
          <div className="line">
            <span className="text-secondary">me</span>
            {` - ${descriptions.me}`}
            <br />
            <span className="text-secondary">swapi</span>
            {` - ${descriptions.swapi}`}
          </div>
          <div className="line">
            <span className="text-secondary">resume</span>
            {` - ${descriptions.resume}`}
            <br />
            <span className="text-secondary">linkedin</span>
            {` - ${descriptions.linkedin}`}
            <br />
            <span className="text-secondary">github</span>
            {` - ${descriptions.github}`}
            <br />
            <span className="text-secondary">email</span>
            {` - ${descriptions.email}`}
          </div>
          <div className="line">
            <span className="text-secondary">clear</span>
            {` - ${descriptions.clear}`}
            <br />
            <span className="text-secondary">help</span>
            {` - ${descriptions.help}`}
          </div>
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
        <div className="line me">
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
            {links.email}
          </a>
        </div>
      );
    case "swapi":
      return (
        <div className="line">
          <a href={links.swapi} target="_blank" rel="noopener noreferrer">
            Vue SWAPI
          </a>
        </div>
      );
    case "":
      return "";
    default:
      return (
        <div className="line">
          Unknown command: <span className="text-secondary">{line}</span>
        </div>
      );
  }
}

function Output(props) {
  return (
    <div>
      <div className="line">
        <span className="text-accent">
          <span className="mobile-hidden">me@luisarredondo.com:</span>
          ~$&nbsp;
        </span>
        <span className="text-secondary">{props.line}</span>
      </div>
      {createOutput(props.line)}
    </div>
  );
}

export default Output;
