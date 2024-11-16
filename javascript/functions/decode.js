// javascript\functions\decode.js

import getMorseCharacterList from "./getMorseCharacterList";
import translateMorseCharacter from "./translateMorseCharacter";

function decode(morseText) {
  const morseCharactersFromMorseText = getMorseCharacterList(morseText);

  const latinCharactersFromLatinText = [];

  let latinText = "";

  for (
    let positionInArray = 0;
    positionInArray < morseCharactersFromMorseText.length;
    positionInArray++
  ) {
    const morseCharacter = morseCharactersFromMorseText[positionInArray];

    const latinCharacter = translateMorseCharacter(morseCharacter);

    latinCharactersFromLatinText[latinCharactersFromLatinText.length] =
      latinCharacter;
  }

  for (
    let positionInArray = 0;
    positionInArray < latinCharactersFromLatinText.length;
    positionInArray++
  ) {
    latinText += latinCharactersFromLatinText[positionInArray];
  }

  return latinText;
}

export default decode;
