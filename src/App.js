import React, { useState } from "react";
import Cards from "./components/Cards";
import ScoreBoard from "./components/ScoreBoard";
import "./style.css";

const App = (props) => {
  const [data, setData] = useState("some data");

  return (
    <div>
      <ScoreBoard parentData={data} />
      <Cards />
    </div>
  );
};

export default App;
