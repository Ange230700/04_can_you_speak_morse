// javascript\functions\getMorseCharacterList.js

function getMorseCharacterList(morseText) {
  const morseCharactersFromText = [];
  let morseLetter = "";

  for (
    let morseCharacterPosition = 0;
    morseCharacterPosition < morseText.length;
    morseCharacterPosition++
  ) {
    if (morseText[morseCharacterPosition] === " ") {
      morseCharactersFromText[morseCharactersFromText.length] = morseLetter;
      morseLetter = "";
      continue;
    } else if (morseCharacterPosition === morseText.length - 1) {
      morseLetter += morseText[morseCharacterPosition];
      morseCharactersFromText[morseCharactersFromText.length] = morseLetter;
      morseLetter = "";
    } else {
      morseLetter += morseText[morseCharacterPosition];
    }
  }

  return morseCharactersFromText;
}

export default getMorseCharacterList;
