// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '', sym = '#') {
	let middle = Math.floor(((n*2)-1) / 2);
	let width = n*2-1;

	if (row === n) return;
	if (level.length === width) {
		console.log(level);
		return pyramid(n, row +1, level = '');
	}

	if (level.length <= middle + row && level.length >= middle - row){
		level = level + sym;
	} else {
		level = level + ' ';
	}
	return pyramid(n, row, level);
}

module.exports = pyramid;


	// let width = 2 * n - 1;
	// for (let i = 0; i < n; i++){
	// 	let level = '';
	// 	let symbolCount = 1 + (i * 2);
	// 	let spaceCount = (width - symbolCount) / 2;
	// 	console.log(' '.repeat(spaceCount) + '#'.repeat(symbolCount) + ' '.repeat(spaceCount))
	// }
