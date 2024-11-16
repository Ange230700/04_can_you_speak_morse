// javascript\functions\getLatinCharacterList.js

function getLatinCharacterList(text) {
  const charactersFromText = [];

  for (
    let characterPosition = 0;
    characterPosition < text.length;
    characterPosition++
  ) {
    charactersFromText[charactersFromText.length] = text[characterPosition];
  }

  return charactersFromText;
}

export default getLatinCharacterList;
