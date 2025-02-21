import { useEffect, useState } from 'react';

function useDebounce(value: string, delay: number = 400): string {
	const [debouncedVal, setDebouncedVal] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedVal(value);
		}, delay);

		return () => clearTimeout(timer);
	}, [value, delay]);
	return debouncedVal;
}

export default useDebounce;
