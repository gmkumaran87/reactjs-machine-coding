import { useState } from 'react';
import './App.css';
import Game from './pages/Game';
import { generateCards, shuffleCards, TOTAL_CARDS } from './utils/helper';

function App() {
	const [cards, setCards] = useState(generateCards(TOTAL_CARDS));

	const getCardsShuffle = () => {
		console.log('Cards', cards);
		setCards(shuffleCards(cards));
	};

	return (
		<div>
			<Game cardCounts={TOTAL_CARDS} cards={cards} />
			<button className='btn' onClick={getCardsShuffle}>
				Shuffle
			</button>
		</div>
	);
}

export default App;
