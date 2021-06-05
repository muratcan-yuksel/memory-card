import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
//level1
import plato from "../images/plato.jpeg";
import aristotle from "../images/aristotle.jpeg";
import thrasymachus from "../images/thrasymachus.jpeg";
import socrates from "../images/socrates.jpg";
//level2 -8
import descartes from "../images/descartes.jpg";
import kant from "../images/kant.jpg";
import hegel from "../images/hegel.jpeg";
import schelling from "../images/schelling.jpg";
import fichte from "../images/fichte.jpg";
import schopenhauer from "../images/schopenhauer.jpg";
import marx from "../images/marx.jpg";
import engels from "../images/engels.jpeg";
//level3 -14
import nietzsche from "../images/nietzsche.jpeg";
import feuerbach from "../images/feuerbach.jpeg";
import heidegger from "../images/heidegger.jpeg";
import wittgenstein from "../images/wittgenstein.jpg";
import benjamin from "../images/benjamin.jpg";
import adorno from "../images/adorno.jpg";
import leviStrauss from "../images/leviStrauss.png";
import baudrillard from "../images/baudrillard.jpg";
import sartre from "../images/sartre.jpeg";
import camus from "../images/camus.jpg";
import kojeve from "../images/kojeve.jpg";
import freud from "../images/freud.jpeg";
import jung from "../images/jung.jpeg";
import fanon from "../images/fanon.jpg";
//level4- 18
import derrida from "../images/derrida.jpg";
import kristeva from "../images/kristeva.jpg";
import althusser from "../images/althusser.jpg";
import badiou from "../images/badiou.jpg";
import barthes from "../images/barthes.jpg";
import kull from "../images/kull.jpeg";
import uexküll from "../images/uexküll.jpg";
import debord from "../images/debord.jpeg";
import guattari from "../images/guattari.jpg";
import deleuze from "../images/deleuze.jpeg";
import lacan from "../images/lacan.jpg";
import zizek from "../images/zizek.jpg";
import saussure from "../images/saussure.png";
import eco from "../images/eco.jpeg";
import lotman from "../images/lotman.jpeg";
import mlotman from "../images/mlotman.jpeg";
import sebeok from "../images/sebeok.jpg";
import land from "../images/land.jpg";

const Cards = (props) => {
  const level1 = [
    {
      title: "Plato",
      img: plato,
      id: uniqid(),
    },
    { title: "Aristotle", img: aristotle, id: uniqid() },
    { title: "Thrasymachus", img: thrasymachus, id: uniqid() },
    { title: "Socrates", img: socrates, id: uniqid() },
  ];

  //initial philosophers array
  const [images, setImages] = useState(level1);
  //selected items array
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffle = (e) => {
    //this shuffles the images array
    setImages([...images.sort(() => Math.random() - 0.5)]);
    console.log(images);
    //map through the images array and find the object that corresponds to the id in question
    images.map((item) => {
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
      if (currentScore === bestScore) {
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
    if (currentScore === images.length - 1) {
      alert("next level");
    }
    sendData();
  }, [images]);

  //doing the map here so that I can return elements in a bootstrap grid
  const imagesCards = images.map((item) => {
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
        <div className="row">{imagesCards}</div>
      </div>
    </div>
  );
};

export default Cards;
