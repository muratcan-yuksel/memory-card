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
  const foo = () => {
    level1.map((item) => {
      return <li key={item.id}> {item.title}</li>;
    });
  };
  return (
    <div>
      yoho
      <div>{level1[0].id}</div>
      <ul>
        {level1.map((item) => {
          return <li key={item.id}> {item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cards;
