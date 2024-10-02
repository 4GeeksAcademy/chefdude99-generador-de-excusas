/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big", "small"];
  let noun = ["jogger", "racoon"];
  let exten = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        for (let c = 0; c < exten.length; c++) {
          console.log(pronoun[i] + adj[a] + noun[b] + exten[c]);
        }
      }
    }
  }
};
