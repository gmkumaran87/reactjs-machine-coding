import { useCallback, useState, useRef } from 'react';

import './App.css';
import useFetch from './useFetch';

function App() {
	const observer = useRef();
	const [pageNo, setPageNo] = useState(0);
	const [isLoading, error, items, hasMore] = useFetch(pageNo);

	let mutationObs = useCallback(
		(node) => {
			if (isLoading) return;

			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNo((prev) => prev + 1);
				}
			});
			if (node) {
				observer.current.observe(node);
			}
		},
		[hasMore, isLoading]
	);

	return (
		<>
			{items?.map((item, index) => {
				if (items.length === index + 1) {
					return (
						<div className='item' style={{ color: 'red' }} ref={mutationObs} key={item}>
							{item}
						</div>
					);
				} else {
					return (
						<div className='item' key={item}>
							{item}
						</div>
					);
				}
			})}
			{isLoading && <div>Loading...</div>}
			{error && <div>SOmething went wrong</div>}
		</>
	);
}

export default App;
