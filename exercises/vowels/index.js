// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let count = str.match(/[aeiou]/gi);
	return count ? count.length : 0;
}

module.exports = vowels;


// ----- Without Regex -----
/*
	let vowels = 'aeiou';
	let count = 0;
	for (let letter of str.toLowerCase()){
		if (vowels.includes(letter)) count++;
	}
	return count;

*/