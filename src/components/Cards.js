import React, { useState } from "react";
import uniqid from "uniqid";

const Cards = () => {
  const [level1, setLevel1] = useState([
    { title: "Plato", src: "", id: uniqid() },
    { title: "Aristotle", src: "", id: uniqid() },
    { title: "Tyrasymakhos", src: "", id: uniqid() },
    { title: "Socrates", src: "", id: uniqid() },
  ]);
  //   const tryLog=()=>{
  //       setLevel1()
  //   }

  return (
    <div>
      yoho
      <div>{level1[0].id}</div>
    </div>
  );
};

export default Cards;
