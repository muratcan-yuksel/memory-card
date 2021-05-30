import React from "react";
import Cards from "./components/Cards";
import ScoreBoard from "./components/ScoreBoard";
import "./style.css";

const App = () => {
  return (
    <div>
      <ScoreBoard />
      <Cards />
    </div>
  );
};

export default App;
