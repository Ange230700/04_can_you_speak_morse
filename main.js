// main.js

import translateLatinCharacter from "./javascript/functions/translateLatinCharacter.js";
import translateMorseCharacter from "./javascript/functions/translateMorseCharacter.js";
import getLatinCharacterList from "./javascript/functions/getLatinCharacterList.js";
import getMorseCharacterList from "./javascript/functions/getMorseCharacterList.js";
import encode from "./javascript/functions/encode.js";
import decode from "./javascript/functions/decode.js";

console.log(
  translateLatinCharacter("A"),
  "<==>",
  translateMorseCharacter(".-"),
);
console.log(
  getLatinCharacterList("Hello, world"),
  "<==>",
  getMorseCharacterList(".... . .-.. .-.. --- , / .-- --- .-. .-.. -.."),
);
console.log(encode("Hello, world"));
console.log(decode(".... . .-.. .-.. --- , / .-- --- .-. .-.. -.."));
