// javascript\functions\translateLatinCharacter.js

import latinToMorse from "../data/latinToMorse";

function translateLatinCharacter(latinCharacterToTranslate) {
  if (latinToMorse[latinCharacterToTranslate] === undefined) {
    return latinCharacterToTranslate;
  }

  return latinToMorse[latinCharacterToTranslate];
}

export default translateLatinCharacter;
