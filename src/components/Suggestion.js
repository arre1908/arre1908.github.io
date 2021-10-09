import React from "react";
import "../css/Suggestion.scss";

function Suggestion({ text, onClick }) {
  return (
    <button className="suggestion" onClick={onClick}>
      {text}
    </button>
  );
}

export default Suggestion;
