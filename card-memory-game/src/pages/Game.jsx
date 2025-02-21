import React, { useState } from 'react';
import Card from '../components/Card';

const Game = ({ cards }) => {
	// const [cards, setCards] = useState();
	return (
		<div className='cards-container'>
			{cards.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</div>
	);
};

export default Game;
