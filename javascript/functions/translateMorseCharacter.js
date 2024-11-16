// javascript\functions\translateMorseCharacter.js

import morseToLatin from "../data/morseToLatin";

function translateMorseCharacter(morseCharacterToTranslate) {
  if (morseCharacterToTranslate === " ") {
    return "";
  }

  if (morseCharacterToTranslate === "/") {
    return " ";
  }

  if (morseToLatin[morseCharacterToTranslate] === undefined) {
    return morseCharacterToTranslate;
  }

  return morseToLatin[morseCharacterToTranslate];
}

export default translateMorseCharacter;
