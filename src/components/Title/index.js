import React from "react";
import image from "../images/image.png";

function Title(props) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="jumbotron jumbotron-fluid"
    >
      <div className="container">
        <h1 className="display-4 text">{props.children}</h1>
        <p className="lead text">
          Click on an image to earn points, but dont click more than once!
        </p>
      </div>
    </div>
  );

  // return <h1 className="title">{props.children}</h1>;
}

export default Title;
