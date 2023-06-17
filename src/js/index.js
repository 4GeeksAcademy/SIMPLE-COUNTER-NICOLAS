//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import SecondsCounter from "./component/SecondsCounter.jsx";

let count = -1
let secondsA = 0
let secondsB = 0
let secondsC = 0
let secondsD = 0
let secondsE = 0


setInterval(function() {
    count++;
    if (count === 10) {
        count = 0;
        secondsA++;
    } if (secondsA === 10) {
            secondsA = 0,
            secondsB++
        } if (secondsB === 10) {
            secondsB = 0,
            secondsC++
        } if (secondsC === 10) {
            secondsC = 0,
            secondsD++
        } if (secondsD === 10) {
            secondsD = 0,
            secondsE++
        }
        ReactDOM.render(<SecondsCounter segundos1={count} segundos2={secondsA} segundos3={secondsB} segundos4={secondsC} segundos5={secondsD} segundos6={secondsE}/>, document.querySelector("#app")) 
        }, 1000);

//render your react application

