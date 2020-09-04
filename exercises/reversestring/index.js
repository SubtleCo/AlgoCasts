// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

// Easy, but cheating
	// return str.split('').reverse().join('');

// With a for loop
	// let reversed = ''
	// for (let char of str) {
	// 	reversed = char + reversed;
	// }
	// return reversed;

// with reduce (remember, variables are (buildingVariable, inividual) => {what to do}, startingValue)
	return str.split('').reduce((rev, char) => {
		return char + rev;
	}, '');

}

module.exports = reverse;
