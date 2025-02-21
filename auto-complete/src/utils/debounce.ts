function debounce(func, delay = 500) {
	let timer: number | null;

	return function (...args) {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}

		timer = setTimeout(() => {
			return func.apply(this, arguments);
		}, delay);
	};
}

export { debounce };
