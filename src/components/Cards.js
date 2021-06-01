import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import plato from "../images/plato.jpeg";
import aristotle from "../images/aristotle.jpeg";
import thrasymachus from "../images/thrasymachus.jpeg";
import socrates from "../images/socrates.jpg";

const Cards = (props) => {
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
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffle = (e) => {
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
      setCurrentScore((currentScore) => (currentScore = 0));
      //if I don't do this, the score starts with 1 on mount
    } else if (result === false && selectedItems.length !== 0) {
      console.log(
        "Array does not contain duplicate elements, Nothing to see here, move on."
      );
      setCurrentScore(currentScore + 1);
      if (bestScore >= currentScore) {
        setBestScore(bestScore + 1);
      }
      console.log(currentScore);
    }
  };
  const sendData = () => {
    props.fromChild({ currentScore, bestScore });
  };

  useEffect(() => {
    //call checkduplicate function
    checkDuplicate();
    //when the score reaches to the array's length, alert game over
    //a dirty solution, otherwise, I have to click once more to get the alert
    if (currentScore === level1.length - 1) {
      alert("next level");
    }
    sendData();
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
  console.log(currentScore);
  console.log(bestScore);
  //for some reason, this solved the problem of first click not sending the data to App.js
  //but also it gives an error on the console. But it compiles so...
  sendData();

  return (
    <div>
      <div className="container">
        <div className="row">{level1Cards}</div>
      </div>
    </div>
  );
};

export default Cards;
