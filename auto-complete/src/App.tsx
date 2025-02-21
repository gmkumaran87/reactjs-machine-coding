// import { useState } from 'react';

import './App.css';
import AutoComplete from './pages/AutoComplete';

export type MakeRequestAPIType = {
	items: { id: number; images: string[]; title: string }[];
	error: string;
};
function App() {
	// const [count, setCount] = useState(0);
	async function getAPIData(value: string): Promise<MakeRequestAPIType> {
		const result = { items: [], error: '' };
		try {
			const res = await fetch(`https://dummyjson.com/products/search?q=${value}`);
			const data = await res.json();
			return { items: data?.products, error: '' };
		} catch (error: unknown) {
			result.error = error.msg || 'Something went wrong';
			return result;
		}
	}
	return (
		<div className='wrapper'>
			<h2>TypeAhead (online)</h2>
			<AutoComplete promise={getAPIData} />
		</div>
	);
}

export default App;
