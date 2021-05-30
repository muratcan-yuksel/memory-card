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

  return (
    <div>
      <div>{level1[0].id}</div>
      <ul>
        {level1.map((item) => {
          return (
            <div>
              <li key={item.id}>
                {/* {" "}
                {item.title}, {item.id}, <img src={item.img} /> */}
                <div className="card" style={{ width: "18rem" }}>
                  <img src={plato} className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Cards;
