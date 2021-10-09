import React from "react";
import Suggestion from "./Suggestion";
import { links, descriptions } from "../config";
import "../css/Output.scss";

function createOutput(line, handleSubmit) {
  switch (line) {
    case "help":
      return (
        <div>
          <div className="line">
            <Suggestion text="me" onClick={handleSubmit} /> - {descriptions.me}
            <br />
            <Suggestion text="swapi" onClick={handleSubmit} /> -
            {descriptions.swapi}
          </div>
          <div className="line">
            <Suggestion text="resume" onClick={handleSubmit} /> -
            {descriptions.resume}
            <br />
            <Suggestion text="linkedin" onClick={handleSubmit} /> -
            {descriptions.linkedin}
            <br />
            <Suggestion text="github" onClick={handleSubmit} /> -
            {descriptions.github}
            <br />
            <Suggestion text="email" onClick={handleSubmit} /> -
            {descriptions.email}
          </div>
          <div className="line">
            <Suggestion text="clear" onClick={handleSubmit} /> -
            {descriptions.clear}
            <br />
            <Suggestion text="help" onClick={handleSubmit} /> -
            {descriptions.help}
          </div>
        </div>
      );
    case "resume":
      return (
        <div className="line">
          <a href={links.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>{" "}
          (link)
        </div>
      );
    case "linkedin":
      return (
        <div className="line">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          (link)
        </div>
      );
    case "github":
      return (
        <div className="line">
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            Github
          </a>{" "}
          (link)
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
          </a>{" "}
          (link)
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
          </a>{" "}
          (link)
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

function Output({ line, handleSubmit }) {
  return (
    <div>
      <div className="line">
        <span className="text-accent">
          <span className="mobile-hidden">me@luisarredondo.com:</span>
          ~$&nbsp;
        </span>
        <span className="text-secondary">{line}</span>
      </div>
      {createOutput(line, handleSubmit)}
    </div>
  );
}

export default Output;
