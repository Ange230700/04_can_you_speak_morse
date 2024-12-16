// javascript\events\handlers.js

import { createAppComponent } from "../components/creation.js";
import { decode, encode } from "../helpers/functions.js";

const handleTranslationToMorse = (isUpdatingLatin, isUpdatingMorse) => {
  if (!isUpdatingMorse) {
    isUpdatingLatin = true;
    document.querySelector("#morse-input").value = encode(
      document.querySelector("#latin-input").value,
    );
    isUpdatingLatin = false;
  }
};

const handleTranslationToLatin = (isUpdatingMorse, isUpdatingLatin) => {
  if (!isUpdatingLatin) {
    isUpdatingMorse = true;
    document.querySelector("#latin-input").value = decode(
      document.querySelector("#morse-input").value,
    );
    isUpdatingMorse = false;
  }
};

const handleAppInterfaceDisplay = () => {
  document.querySelector("#app").innerHTML = `
    ${createAppComponent()}
  `;

  let isUpdatingLatin = false;
  let isUpdatingMorse = false;

  document.querySelector("#latin-input").addEventListener("input", () => {
    handleTranslationToMorse(isUpdatingMorse, isUpdatingLatin);
  });

  document.querySelector("#morse-input").addEventListener("input", () => {
    handleTranslationToLatin(isUpdatingMorse, isUpdatingLatin);
  });
};

export { handleAppInterfaceDisplay };
