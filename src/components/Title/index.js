import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{props.children}</h1>
        <p className="lead">
          Click on an image to earn points, but dont click more than once!
        </p>
      </div>
    </div>
  );

  // return <h1 className="title">{props.children}</h1>;
}

export default Title;
