let test1 = [
[0,1,1,0],
[0,1,0,1],
[0,0,1,0],
[1,1,0,0]]
;

let test2 = [
[0,1,1,0,1],
[0,1,0,1,0],
[1,0,1,1,0],
[0,0,1,0,0],
[1,1,0,1,0]]
;

function flood(x,y,sea){
	debugger;
	if (y + 1 < sea.length && sea[y + 1][x] === 1) {
		sea[y + 1][x] = 0;
		flood(x, y+1, sea);
	}
	if (y - 1 >= 0 && sea[y - 1][x] === 1) {
		sea[y - 1][x] = 0;
		flood(x, y-1, sea);
	}
	if (x + 1 < sea[0].length && sea[y][x + 1] === 1) {
		sea[y][x + 1] = 0;
		flood(x + 1, y, sea);
	}
	if (x - 1 >= 0 && sea[y][x - 1] === 1) {
		sea[y][x - 1] = 0;
		flood(x-1, y, sea);
	}
	return sea;
}

function islands(bitmap) {
	let sea = [...bitmap];
	let islandCount = 0;
	for (let y = 0; y < sea.length; y++) {
		for (let x = 0; x < sea[0].length; x++){
			if (sea[y][x] === 1){
				islandCount++;
				sea[y][x] = 0;
				flood(x,y,sea);
			}
		}
	}
	console.log(`There are ${islandCount} islands in this swirling sea`)
}

islands(test1);
islands(test2);
