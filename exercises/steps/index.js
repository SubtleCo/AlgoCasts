// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// --- WITH recursion ---
function steps(n, row = 0, step = '', symbol = '#') {
	if (n === row) return;

	if (n === step.length){
		console.log(step);
		return steps(n, row+1);
	}

	step = step + (step.length <= row ? symbol : ' ');
	return steps(n, row, step)
}







// --- WITHOUT recursion ---
// function steps(n) {
// 	for (let i = 0; i < n; i++){
// 		let level = '';
// 		for (let j = 0; j < n; j++){
// 			level = level + (j <= i ? '#' : ' ');
// 		}
// 		console.log(level);
// 	}
// }

module.exports = steps;
