import { useState } from 'react';
import './App.css';
import SinglePageAccordion from './pages/SinglePageAccordion';
import questions from './data';

function App() {
	//   const [count, setCount] = useState(0)

	return (
		<div className='wrapper'>
			<h2>Accordions</h2>
			<SinglePageAccordion data={questions} />
		</div>
	);
}

export default App;
