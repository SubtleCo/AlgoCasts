// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

// My attempt	
	// if (n > -1) {
	// 	return parseInt(n.toString().split('').reverse().join(''));
	// } else {
	// 	return reverseInt(n * -1) * -1;
	// }

// Course version using Math.sign() which returns -1 if number is - or 1 if number is +
	// return (parseInt(n.toString().split('').reverse().join('')) * Math.sign(n));

// Cleanest
	let rev = n
		.toString()
		.split('')
		.reverse()
		.join('');

	return parseInt(rev) * Math.sign(n);

}

module.exports = reverseInt;
