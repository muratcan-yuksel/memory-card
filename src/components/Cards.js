import React, { useState } from "react";
import uniqid from "uniqid";
import plato from "../images/plato.jpeg";
import aristotle from "../images/aristotle.jpeg";
import thrasymachus from "../images/thrasymachus.jpeg";
import socrates from "../images/socrates.jpg";

const Cards = () => {
  const [level1, setLevel1] = useState([
    {
      title: "Plato",
      img: plato,
      id: uniqid(),
    },
    { title: "Aristotle", img: aristotle, id: uniqid() },
    { title: "Thrasymachus", img: thrasymachus, id: uniqid() },
    { title: "Socrates", img: socrates, id: uniqid() },
  ]);
  //doing the map here so that I can return elements in a bootstrap grid
  const foo = level1.map((item) => {
    return (
      <div className="col-lg-3 col-sm-6 col-md-6 mt-5 ms-5">
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
