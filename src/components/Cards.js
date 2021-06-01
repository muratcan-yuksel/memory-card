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
    //map through the level1 array and find the object that corresponds to the id in question
    level1.map((item) => {
      if (item.id === e.target.id) {
        console.log(item);
        //add the object into the selectedItems array
        setSelectedItems([item, ...selectedItems]);
      }
    });
    console.log(selectedItems);
  };

  //checks if selecteditems array contains the same element twice
  const checkDuplicate = () => {
    let map = {};
    let result = false;
    for (let i = 0; i < selectedItems.length; i++) {
      // check if object contains entry with this element as key
      if (map[selectedItems[i].title]) {
        result = true;
        // terminate the loop
        break;
      }
      // add entry in object with the element as key
      map[selectedItems[i].title] = true;
    }
    if (result) {
      console.log("Array contains duplicate elements, Game Over");
      //empty the selected items array
      setSelectedItems((selectedItems) => (selectedItems = []));
    } else {
      console.log(
        "Array does not contain duplicate elements, Nothing to see here, move on."
      );
    }
  };

  useEffect(() => {
    console.log("rendered");
    console.log(selectedItems);
    //call checkduplicate function
    checkDuplicate();
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
  console.log(selectedItems);

  return (
    <div>
      <div className="container">
        <div className="row">{level1Cards}</div>
      </div>
    </div>
  );
};

export default Cards;
