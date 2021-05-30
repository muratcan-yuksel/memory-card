import React, { useState } from "react";
import uniqid from "uniqid";
import plato from "../images/plato.jpeg";

const Cards = () => {
  const [level1, setLevel1] = useState([
    {
      title: "Plato",
      img: plato,
      id: uniqid(),
    },
    { title: "Aristotle", img: "plato", id: uniqid() },
    { title: "Tyrasymakhos", img: "plato", id: uniqid() },
    { title: "Socrates", img: "plato", id: uniqid() },
  ]);

  return (
    <div>
      yoho
      <div>{level1[0].id}</div>
      <ul>
        {level1.map((item) => {
          return (
            <div>
              <li key={item.id}>
                {" "}
                {item.title}, {item.id}, <img src={item.img} />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Cards;
