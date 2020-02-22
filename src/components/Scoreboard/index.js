import React from "react";
import "./style.css";

function Scoreboard(props) {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      {props.children}
    </nav>
  );
  // return <h1 className="score">{props.children}</h1>;
}

export default Scoreboard;
