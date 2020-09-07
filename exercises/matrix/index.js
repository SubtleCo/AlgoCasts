// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


function matrix(n, arr = [], x = 0, y = 0, xBound = 0, yBound = 0, count = 1) {
	if (arr.length  === 0) {
		for (let i = 0; i < n; i++){
			arr.push([]);
		}
	}

	if (count > n*n) {
		return arr;
		console.log(arr);
	}
	// First row
	while (x < n-xBound){
		if (arr[y][x]) return arr;
		arr[y][x] = count;
		if (count === n*n) return arr;
		x++;
		count++;
	}

	// First col
	x --;
	y++;
	while (y < n-yBound) {
		arr[y][x] = count;
		count++;
		y++;
	}
	yBound ++
	// reverse row
	y --;
	x--;
	while (x >= xBound) {
		arr[y][x] = count;
		count++;
		x--;
	}

	//reverse col 
	x++;
	y--;
	while (y >= yBound) {
		arr[y][x] = count;
		count++;
		y--;
	}
	xBound++;
	debugger;
	return matrix(n, arr, xBound, yBound, xBound, yBound, count);
}
matrix(3);
module.exports = matrix;
