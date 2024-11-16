// javascript\functions\getLatinCharacterList.js

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

export default getLatinCharacterList;
