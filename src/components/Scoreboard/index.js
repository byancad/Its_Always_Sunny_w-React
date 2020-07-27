import React from "react";

function Scoreboard(props) {
  return <nav className="navbar fixed-top scoreboard">{props.children}</nav>;
  // return <h1 className="score">{props.children}</h1>;
}

export default Scoreboard;
