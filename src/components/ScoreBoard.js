import React from "react";

const ScoreBoard = () => {
  return (
    <div>
      <div className="jumbotron">jumbo</div>
      <div className="container">
        <div className="row">
          <div className="col-6 border borderprimary">Currect Score:</div>
          <div className="col-6 border border-danger">Best Score: </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
