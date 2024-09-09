export function getRandomSingleColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	console.log('Color: ', color);

	return color;
}

export function getRandomColors(limit) {
	let colors = [];
	let seen = new Set();
	for (let i = 0; i < limit; i++) {
		let color = getRandomSingleColor();
		// Check if color is already in the set to avoid duplicates.
		while (seen.has(color)) {
			color = getRandomSingleColor(); // Regenerate color if it's a duplicate.
		}
		seen.add(color);
		colors.push(color);
	}
	return colors;
}

export function assignColorsToBox(colors, boxArray) {
	let newBoxArray = [...boxArray];
	let assignedIndexes = [];
	let total = boxArray.length;
	// Assign colors to boxes in the array.

	colors.forEach((color) => {
		let i = 2;
		while (i > 0) {
			let randomIndex = Math.floor(Math.random() * total);

			while (assignedIndexes.includes(randomIndex)) {
				randomIndex = Math.floor(Math.random() * total);
			}

			newBoxArray[randomIndex] = { ...newBoxArray[randomIndex], color: color };
			assignedIndexes.push(randomIndex);
			i--;
		}
	});
	return newBoxArray;
}
