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
import baudrillard from "../images/baudrillard.jpeg";
import sartre from "../images/sartre.jpeg";
import camus from "../images/camus.jpg";
import kojeve from "../images/kojeve.jpg";
import freud from "../images/freud.jpeg";
import jung from "../images/jung.jpeg";
import fanon from "../images/fanon.jpg";
//level4- 19
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
import torop from "../images/torop.jpeg";

const Cards = (props) => {
  //level1 array
  const level1 = [
    {
      title: "Plato",
      img: plato,
      id: uniqid(),
    },
    { title: "Aristotle", img: aristotle, id: uniqid(), level: "lvl1" },
    { title: "Thrasymachus", img: thrasymachus, id: uniqid(), level: "lvl1" },
    { title: "Socrates", img: socrates, id: uniqid(), level: "lvl1" },
  ];
  //level2 array

  const level2 = [
    { title: "Immanuel Kant", img: kant, id: uniqid(), level: "lvl2" },
    { title: "G.W.F. Hegel", img: hegel, id: uniqid(), level: "lvl2" },
    { title: "F.W.J. Schelling", img: schelling, id: uniqid(), level: "lvl2" },
    {
      title: "Johann Gottlieb Fichte",
      img: fichte,
      id: uniqid(),
      level: "lvl2",
    },
    { title: "René Descartes", img: descartes, id: uniqid(), level: "lvl2" },
    {
      title: "Arthur Schopenhauer",
      img: schopenhauer,
      id: uniqid(),
      level: "lvl2",
    },
    { title: "Karl Marx", img: marx, id: uniqid(), level: "lvl2" },
    { title: "Friedrich Engels", img: engels, id: uniqid(), level: "lvl2" },
  ];

  //level3 array
  const level3 = [
    {
      title: "Friedrich Nietzsche",
      img: nietzsche,
      id: uniqid(),
      level: "lvl3",
    },
    { title: "Ludwig Feuerbach", img: feuerbach, id: uniqid(), level: "lvl3" },
    { title: "Marting Heidegger", img: heidegger, id: uniqid(), level: "lvl3" },
    {
      title: "Ludwig Wittgenstein",
      img: wittgenstein,
      id: uniqid(),
      level: "lvl3",
    },
    { title: "Walter Benjamin", img: benjamin, id: uniqid(), level: "lvl3" },
    { title: "Theodor W. Adorno", img: adorno, id: uniqid(), level: "lvl3" },
    {
      title: "Claude Lévi-Strauss",
      img: leviStrauss,
      id: uniqid(),
      level: "lvl3",
    },
    {
      title: "Jean Baudrillard",
      img: baudrillard,
      id: uniqid(),
      level: "lvl3",
    },
    { title: "Jean-Paul Sartre", img: sartre, id: uniqid(), level: "lvl3" },
    { title: "Albert Camus", img: camus, id: uniqid(), level: "lvl3" },
    { title: "Alexandre Kojève", img: kojeve, id: uniqid(), level: "lvl3" },
    { title: "Sigmund Freud", img: freud, id: uniqid(), level: "lvl3" },
    { title: "Carl Gustav Jung", img: jung, id: uniqid(), level: "lvl3" },
    { title: "Frantz Fanon", img: fanon, id: uniqid(), level: "lvl3" },
  ];
  //level4 array
  const level4 = [
    { title: "Jacques Derrida", img: derrida, id: uniqid(), level: "lvl4" },
    { title: "Julia Kristeva", img: kristeva, id: uniqid(), level: "lvl4" },
    { title: "Louis Althusser", img: althusser, id: uniqid(), level: "lvl4" },
    { title: "Alain Badiou", img: badiou, id: uniqid(), level: "lvl4" },
    { title: "Roland Barthes", img: barthes, id: uniqid(), level: "lvl4" },
    { title: "Kalevi Kull", img: kull, id: uniqid(), level: "lvl4" },
    { title: "Jakob von Uexküll", img: uexküll, id: uniqid(), level: "lvl4" },
    { title: "Guy Debord", img: debord, id: uniqid(), level: "lvl4" },
    { title: "Félix Guattari", img: guattari, id: uniqid(), level: "lvl4" },
    { title: "Gilles Deleuze", img: deleuze, id: uniqid(), level: "lvl4" },
    { title: "Jacques Lacan", img: lacan, id: uniqid(), level: "lvl4" },
    { title: "Slavoj Zizek", img: zizek, id: uniqid(), level: "lvl4" },
    {
      title: "Ferdinand de Saussure",
      img: saussure,
      id: uniqid(),
      level: "lvl4",
    },
    { title: "Umberto Eco", img: eco, id: uniqid(), level: "lvl4" },
    { title: "Juri Lotman", img: lotman, id: uniqid(), level: "lvl4" },
    { title: "Mihhail Lotman", img: mlotman, id: uniqid(), level: "lvl4" },
    { title: "Thomas A. Sebeok", img: sebeok, id: uniqid(), level: "lvl4" },
    { title: "Nick Land", img: land, id: uniqid(), level: "lvl4" },
    { title: "Peeter Torop", img: torop, id: uniqid(), level: "lvl4" },
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
    //map through the images array and find the object that corresponds to the id in question
    images.map((item) => {
      if (item.id === e.target.id) {
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
    if (currentScore === 3) {
      // alert("next level");
      //for some reason, this method works just fine
      images.forEach(function (item) {
        if (Object.values(item).includes("lvl1")) {
          setImages(level2);
          setCurrentScore(currentScore);
          console.log(images.length);
        }
      });
    } else if (currentScore === 11) {
      images.forEach(function (item) {
        if (Object.values(item).includes("lvl2")) {
          setImages(level3);
          setCurrentScore(currentScore);
          console.log(images.length);
        }
      });
    } else if (currentScore === 25) {
      images.forEach(function (item) {
        if (Object.values(item).includes("lvl3")) {
          setImages(level4);
          setCurrentScore(currentScore);
          console.log(images.length);
        }
      });
    } else if (currentScore === 44) {
      alert("Kudos to you!");
    }
    // else if (currentScore > 11) {
    //   images.forEach((item) =>
    //     Object.values(item).includes("lvl2")
    //       ? setImages(level3)
    //       : console.log("do nothing")
    //   );
    // }
    sendData();
  }, [images]);

  //doing the map here so that I can return elements in a bootstrap grid
  const imagesCards = images.map((item) => {
    return (
      <div
        key={item.id}
        className=" col-4 col-sm-4 col-md-3 col-lg-2  mt-5 ms-5 text-center"
      >
        <div className="card h-100 mx-auto w-100 ">
          <img
            onClick={shuffle}
            src={item.img}
            id={item.id}
            className="card-img-top h-100 "
            alt={item.title}
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
