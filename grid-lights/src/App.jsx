// import { useState } from 'react';
import './App.css';
import Grid from './pages/Grid';

function App() {
	// const [count, setCount] = useState(0);
	const config = [
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
	];
	return <Grid config={config} />;
}

export default App;
