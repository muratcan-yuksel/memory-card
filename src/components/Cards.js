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
  const foo = level1.map((item) => {
    return <div className="col">{item.title}</div>;
  });
  return (
    <div>
      <div>{level1[0].id}</div>

      <div className="row">{foo}</div>
    </div>
  );
};

export default Cards;

{
  /* <div classNameName="container">
              <div classNameName="row">
                <div classNameName="card col-4" style={{ width: "18rem" }}>
                  <img src={plato} classNameName="card-img-top" alt="..."></img>
                  <div classNameName="card-body">
                    <p classNameName="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div> */
}
