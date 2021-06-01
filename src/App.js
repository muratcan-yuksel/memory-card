import React, { useState } from "react";
import Cards from "./components/Cards";
import ScoreBoard from "./components/ScoreBoard";
import "./style.css";

const App = (props) => {
  const [current, setCurrent] = useState("some data");
  const [best, setBest] = useState();
  console.log("here's " + current);

  const handleCallback = (childData) => {
    setCurrent(childData.currentScore);
    setBest(childData.bestScore);
  };

  return (
    <div>
      <ScoreBoard currentData={current} bestData={best} />
      <Cards fromChild={handleCallback} />
    </div>
  );
};

export default App;
