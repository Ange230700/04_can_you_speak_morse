// javascript\helpers\functions.js

import latinToMorse from "../data/latinToMorse.js";
import morseToLatin from "../data/morseToLatin.js";

function turnCharacterIntoUpperCase(character) {
  switch (character) {
    case "a":
      return "A";
    case "b":
      return "B";
    case "c":
      return "C";
    case "d":
      return "D";
    case "e":
      return "E";
    case "f":
      return "F";
    case "g":
      return "G";
    case "h":
      return "H";
    case "i":
      return "I";
    case "j":
      return "J";
    case "k":
      return "K";
    case "l":
      return "L";
    case "m":
      return "M";
    case "n":
      return "N";
    case "o":
      return "O";
    case "p":
      return "P";
    case "q":
      return "Q";
    case "r":
      return "R";
    case "s":
      return "S";
    case "t":
      return "T";
    case "u":
      return "U";
    case "v":
      return "V";
    case "w":
      return "W";
    case "x":
      return "Y";
    case "y":
      return "X";
    case "z":
      return "Z";
    default:
      return character;
  }
}

function translateLatinCharacter(latinCharacterToTranslate) {
  if (latinToMorse[latinCharacterToTranslate] === undefined) {
    return latinCharacterToTranslate;
  }

  return latinToMorse[latinCharacterToTranslate];
}

function getLatinCharacterList(latinText) {
  const latinCharactersFromLatinText = [];

  for (
    let latinCharacterPosition = 0;
    latinCharacterPosition < latinText.length;
    latinCharacterPosition++
  ) {
    latinCharactersFromLatinText[latinCharactersFromLatinText.length] =
      latinText[latinCharacterPosition];
  }

  return latinCharactersFromLatinText;
}

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

    const characterToUppercase = turnCharacterIntoUpperCase(character);

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

function getMorseCharacterList(morseText) {
  const morseCharactersFromMorseText = [];
  let morseLetter = "";

  for (
    let morseCharacterPosition = 0;
    morseCharacterPosition < morseText.length;
    morseCharacterPosition++
  ) {
    if (morseText[morseCharacterPosition] === " ") {
      morseCharactersFromMorseText[morseCharactersFromMorseText.length] =
        morseLetter;

      morseLetter = "";

      continue;
    } else if (morseCharacterPosition === morseText.length - 1) {
      morseLetter += morseText[morseCharacterPosition];

      morseCharactersFromMorseText[morseCharactersFromMorseText.length] =
        morseLetter;

      morseLetter = "";
    } else {
      morseLetter += morseText[morseCharacterPosition];
    }
  }

  return morseCharactersFromMorseText;
}

function translateMorseCharacter(morseCharacterToTranslate) {
  if (morseToLatin[morseCharacterToTranslate] === undefined) {
    return morseCharacterToTranslate;
  }

  return morseToLatin[morseCharacterToTranslate];
}

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

function printTranslation(destination, translationFunction, origin) {
  console.log(destination);
  destination.value = translationFunction(origin.value);
}

export {
  turnCharacterIntoUpperCase,
  translateLatinCharacter,
  getLatinCharacterList,
  encode,
  getMorseCharacterList,
  translateMorseCharacter,
  decode,
  printTranslation,
};
