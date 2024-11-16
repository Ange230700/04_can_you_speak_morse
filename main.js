// main.js

import encode from "./javascript/functions/encode.js";
import decode from "./javascript/functions/decode.js";

const latinInput = document.getElementById("latin-input");
const morseInput = document.getElementById("morse-input");

let isUpdatingLatin = false;
let isUpdatingMorse = false;

latinInput.addEventListener("input", () => {
  if (!isUpdatingMorse) {
    isUpdatingLatin = true;
    const latinText = latinInput.value;
    const morseText = encode(latinText);
    morseInput.value = morseText;
    isUpdatingLatin = false;
  }
});

morseInput.addEventListener("input", () => {
  if (!isUpdatingLatin) {
    isUpdatingMorse = true;
    const morseText = morseInput.value;
    const latinText = decode(morseText);
    latinInput.value = latinText;
    isUpdatingMorse = false;
  }
});
