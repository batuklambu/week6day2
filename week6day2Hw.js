// / --- Directions
// // Check to see if two provided strings are anagrams of eachother.
// // One string is an anagram of another if it uses the same characters
// // in the same quantity. Only consider characters, not spaces
// // or punctuation.  Consider capital letters to be the same as lower case
// // --- Examples
// //   anagrams('rail safety', 'fairy tales') --> True
// //   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// //   anagrams('Hi there', 'Bye there') --> False

function validAnagram(str1, str2) {
  if (!str1 || !str2) return false;
  if (str1.length !== str2.length) return false;

  let newStr1 = str1
    .replace(/^w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  let newStr2 = str2
    .replace(/^w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  return newStr1 === newStr2;
}

console.log(validAnagram('rail safety', 'fairy tales')); // true
console.log(validAnagram('RAIL! SAFETY!', 'fairy tales')); // false
console.log(validAnagram('Hi there', 'Bye there')); // true
console.log(validAnagram(' ', ' ')); // true
