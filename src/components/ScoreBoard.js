import React from "react";

const ScoreBoard = (props) => {
  return (
    <div>
      <div className="jumbotron text-center">jumbo</div>
      <div className="container">
        <div className="row">
          <div className="col-6 border borderprimary text-center">
            Current Score: {props.parentData}
          </div>
          <div className="col-6 border border-danger text-center">
            Best Score:{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
