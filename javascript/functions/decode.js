// javascript\functions\decode.js

import getMorseCharacterList from "./getMorseCharacterList";
import translateMorseCharacter from "./translateMorseCharacter";

function decode(morseText) {
  const morseCharactersFromMorseText = getMorseCharacterList(morseText);
  const latinCharactersFromText = [];
  let latinText = "";

  for (
    let positionInArray = 0;
    positionInArray < morseCharactersFromMorseText.length;
    positionInArray++
  ) {
    const morseCharacter = morseCharactersFromMorseText[positionInArray];
    const latinCharacter = translateMorseCharacter(morseCharacter);
    latinCharactersFromText[latinCharactersFromText.length] = latinCharacter;
  }

  for (
    let positionInArray = 0;
    positionInArray < latinCharactersFromText.length;
    positionInArray++
  ) {
    latinText += latinCharactersFromText[positionInArray];
  }

  return latinText;
}

export default decode;
