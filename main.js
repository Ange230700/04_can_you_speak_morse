// main.js

import getLatinCharacterList from "./javascript/functions/getLatinCharacterList.js";
import translateLatinCharacter from "./javascript/functions/translateLatinCharacter.js";
import encode from "./javascript/functions/encode.js";
import getMorseCharacterList from "./javascript/functions/getMorseCharacterList.js";
import translateMorseCharacter from "./javascript/functions/translateMorseCharacter.js";
import decode from "./javascript/functions/decode.js";

console.log(getLatinCharacterList("Hello, world"));
console.log(translateLatinCharacter("A"));
console.log(encode("Hello, world"));
console.log(getMorseCharacterList("......-...-..---,/.-----.-..-..-.."));
console.log(translateMorseCharacter(".-"));
console.log(decode("......-...-..---,/.-----.-..-..-.."));
