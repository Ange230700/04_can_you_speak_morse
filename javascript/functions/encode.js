// javascript\functions\encode.js

import getLatinCharacterList from "./getLatinCharacterList";
import translateLatinCharacter from "./translateLatinCharacter";

function encode(text) {
  const charactersFromText = getLatinCharacterList(text);
  const morseCharactersFromText = [];
  let morseText = "";

  //   this loop is to get the array of translated characters
  for (
    let positionInArray = 0;
    positionInArray < charactersFromText.length;
    positionInArray++
  ) {
    const character = charactersFromText[positionInArray];
    const characterToUppercase = character.toUpperCase();
    const morseCharacter = translateLatinCharacter(characterToUppercase);
    morseCharactersFromText[morseCharactersFromText.length] = morseCharacter;
  }

  //   this one is for writing the morse text
  for (
    let positionInArray = 0;
    positionInArray < morseCharactersFromText.length;
    positionInArray++
  ) {
    morseText += morseCharactersFromText[positionInArray];
  }

  return morseText;
}

export default encode;
