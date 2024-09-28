export function flatten(arr, n) {
	let outArr = [];

	function innerFlat(arr, n) {
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				innerFlat(arr[i], n - 1);
			} else {
				outArr.push(arr[i]);
			}
		}

		return outArr;
	}
	return innerFlat(arr, n);
}
