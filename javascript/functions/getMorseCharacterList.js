// javascript\functions\getMorseCharacterList.js

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

export default getMorseCharacterList;
