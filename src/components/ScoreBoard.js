import React from "react";

const ScoreBoard = (props) => {
  return (
    <div>
      <div className="jumbotron text-center">Philosopher Card Game</div>
      <div className="container">
        <div className="row">
          <div className="col-6 border border-dark text-center">
            Current Score: {props.currentData}
          </div>
          <div className="col-6 border border-dark text-center">
            Best Score:{props.bestData}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
