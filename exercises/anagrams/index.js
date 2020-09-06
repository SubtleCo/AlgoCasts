// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* ******** NOTES ********

Regex
-----

const word = "HI THERE!!!!!";
word.replace(/[^\w]/g, "").toLowerCase
	- ^ means "not"
	- \w means any word character (a-z,A-Z,0-9,_)
	- /g means global (don't stop at the first match)


Iterating over Objects
----------------------

use "in" and not "of"


*/

function mapWord(string){
	let charMap = {};
	for (let char of string.replace(/[^\w]/g, "").toLowerCase()){
		if (!charMap[char]) charMap[char] = 1;
		else charMap[char] ++;
	}
	return charMap;
}

function anagrams(stringA, stringB){
	let mapA = mapWord(stringA),
		mapB = mapWord(stringB);

	if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

	for (let letter in mapA) {
		debugger;
		if (mapA[letter] !== mapB[letter]) return false;
	}
	return true;
}

console.log(anagrams('Hi there', 'ye there'));
	// test code
module.exports = anagrams;

/* My first attempt
	let mapA = {};
	for (let letter of stringA.toLowerCase()) {
		if (!mapA[letter]) mapA[letter] = 1;
		else mapA[letter] ++;
	}
	let mapB = {};
	for (let letter of stringB.toLowerCase()) {
		if (!mapB[letter]) mapB[letter] = 1;
		else mapB[letter] ++;
	}
	for (let key of Object.keys(mapA)) {
		if (mapA[key] !== mapB[key]) return false;
	}
	for (let key of Object.keys(mapB)) {
		if (mapB[key] !== mapA[key]) return false;
	}
	return true;
*/

/* my second attempt

function wordMap(string) {
	let mappedWord = {};
	for (let letter of string.replace(/[^\w]/g, "").toLowerCase()){
		if (!mappedWord[letter]) mappedWord[letter] = 1;
		else mappedWord[letter] ++;
	}
	return mappedWord;
}

function anagrams(stringA, stringB) {
	let aMap     = wordMap(stringA),
		bMap     = wordMap(stringB),
		aLetters = Object.keys(aMap).sort(),
		bLetters = Object.keys(bMap).sort(),
		acount   = Object.values(aMap).sort(),
		bcount   = Object.values(bMap).sort();
	if (aLetters.length !== bLetters.length) return false;
	for (let letter of aLetters) {
		if (aMap[letter] !== bMap[letter]) return false;
	}
	for (let letter of bLetters) {
		if (bMap[letter] !== aMap[letter]) return false;
	}
	return true;
}

*/