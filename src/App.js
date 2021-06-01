import React, { useState } from "react";
import Cards from "./components/Cards";
import ScoreBoard from "./components/ScoreBoard";
import "./style.css";

const App = (props) => {
  const [data, setData] = useState("some data");
  console.log("here's " + data);

  const handleCallback = (childData) => {
    setData(childData);
  };

  return (
    <div>
      <ScoreBoard parentData={data} />
      <Cards fromChild={handleCallback} />
    </div>
  );
};

export default App;
