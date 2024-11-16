// javascript\functions\getMorseCharacterList.js

function getMorseCharacterList(morseText) {
  const morseCharactersFromText = [];

  for (
    let morseCharacterPosition = 0;
    morseCharacterPosition < morseText.length;
    morseCharacterPosition++
  ) {
    morseCharactersFromText[morseCharactersFromText.length] =
      morseText[morseCharacterPosition];
  }

  return morseCharactersFromText;
}

export default getMorseCharacterList;
