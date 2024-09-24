import { useEffect, useState } from 'react';

import './App.css';
import ProgressBar from './pages/ProgressBar';

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCount((prevCount) => {
				if (prevCount === 100) return 100;
				return prevCount + 1;
			});
		}, 10);
		return () => clearInterval(timer);
	}, []);
	console.log('Width count', count);

	return (
		<>
			<div className='App'>
				<h2 className='heading'>Progress Bar</h2>
				<ProgressBar value={count} />
			</div>
		</>
	);
}

export default App;
