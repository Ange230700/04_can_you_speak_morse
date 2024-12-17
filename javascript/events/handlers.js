// javascript\events\handlers.js

import { createAppComponent } from "../components/creation.js";
import { printLatinText, printMorseCode } from "../dom/manipulation.js";

const handleTranslationToMorse = (isUpdatingLatin, isUpdatingMorse) => {
  if (!isUpdatingMorse) {
    isUpdatingLatin = true;
    printMorseCode();
    isUpdatingLatin = false;
  }
};

const handleTranslationToLatin = (isUpdatingMorse, isUpdatingLatin) => {
  if (!isUpdatingLatin) {
    isUpdatingMorse = true;
    printLatinText();
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
