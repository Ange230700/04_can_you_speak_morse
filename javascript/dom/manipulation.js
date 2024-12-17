// javascript\dom\manipulation.js

import { decode, encode } from "../helpers/functions";

function printMorseCode() {
  document.querySelector("#morse-input").value = encode(
    document.querySelector("#latin-input").value,
  );
}

function printLatinText() {
  document.querySelector("#latin-input").value = decode(
    document.querySelector("#morse-input").value,
  );
}

export { printMorseCode, printLatinText };
