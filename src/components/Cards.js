import React, { useState } from "react";
import uniqid from "uniqid";
import plato from "../images/plato.jpeg";
import aristotle from "../images/aristotle.jpeg";

const Cards = () => {
  const [level1, setLevel1] = useState([
    {
      title: "Plato",
      img: plato,
      id: uniqid(),
    },
    { title: "Aristotle", img: aristotle, id: uniqid() },
    { title: "Tyrasymakhos", img: "plato", id: uniqid() },
    { title: "Socrates", img: "plato", id: uniqid() },
  ]);
  //doing the map here so that I can return elements in a bootstrap grid
  const foo = level1.map((item) => {
    return (
      <div className="col-lg-3 col-sm-6 col-md-6">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={item.img}
            className="card-img-top"
            alt="a philosopher"
          ></img>
          <div className="card-body">
            <p className="card-text">{item.title}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div class="container">
        <div className="row">{foo}</div>
      </div>
    </div>
  );
};

export default Cards;
