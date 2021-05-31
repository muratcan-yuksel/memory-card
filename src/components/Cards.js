import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import plato from "../images/plato.jpeg";
import aristotle from "../images/aristotle.jpeg";
import thrasymachus from "../images/thrasymachus.jpeg";
import socrates from "../images/socrates.jpg";

const Cards = () => {
  //initial philosophers array
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
  //selected items array
  const [selectedItems, setSelectedItems] = useState([]);

  const shuffle = (e) => {
    console.log(e.target.id);
    //this shuffles the level1 array
    setLevel1([...level1.sort(() => Math.random() - 0.5)]);
    console.log(level1);
    //use session storage
    sessionStorage.setItem("selectedId", e.target.id);
  };
  useEffect(() => {
    console.log("rendered");
    //get the id in session storage
    console.log(sessionStorage.getItem("selectedId"));
    //map through the level1 array and find the object that corresponds to the id in question
    level1.map((item) => {
      if (item.id === sessionStorage.getItem("selectedId")) {
        console.log(item);
        setSelectedItems([item, ...selectedItems]);
      }
    });
    console.log(selectedItems);
  }, [level1]);

  //doing the map here so that I can return elements in a bootstrap grid
  const level1Cards = level1.map((item) => {
    return (
      <div
        key={item.id}
        className="col-sm-4 col-md-4 col-lg  mt-5 ms-5 text-center"
      >
        <div className="card h-100 mx-auto w-100 ">
          <img
            onClick={shuffle}
            src={item.img}
            id={item.id}
            className="card-img-top h-100 "
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
      <div className="container">
        <div className="row">{level1Cards}</div>
      </div>
    </div>
  );
};

export default Cards;
