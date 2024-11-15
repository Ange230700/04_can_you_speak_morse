// javascript\functions\encode.js

import getLatinCharacterList from "./getLatinCharacterList";
import translateLatinCharacter from "./translateLatinCharacter";

function encode(latinText) {
  const latinCharactersFromLatinText = getLatinCharacterList(latinText);

  const morseCharactersGotFromTranslation = [];

  let morseText = "";

  //   this loop is to get the array of translated characters
  for (
    let positionInArray = 0;
    positionInArray < latinCharactersFromLatinText.length;
    positionInArray++
  ) {
    const character = latinCharactersFromLatinText[positionInArray];

    const characterToUppercase = character.toUpperCase();

    const morseCharacter = translateLatinCharacter(characterToUppercase);

    morseCharactersGotFromTranslation[
      morseCharactersGotFromTranslation.length
    ] = morseCharacter;
  }

  //   this one is for writing the morse text
  for (
    let positionInArray = 0;
    positionInArray < morseCharactersGotFromTranslation.length;
    positionInArray++
  ) {
    if (positionInArray === morseCharactersGotFromTranslation.length - 1) {
      morseText += morseCharactersGotFromTranslation[positionInArray];
    } else {
      morseText += morseCharactersGotFromTranslation[positionInArray] + " ";
    }
  }

  return morseText;
}

export default encode;
