import React, { useState } from 'react';

const Card = ({ card }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	console.log('card', card);
	return (
		<div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped((prev) => !prev)}>
			<div className='card-front'>{card.front}</div>
			<div className='card-back'>{card.back}</div>
		</div>
	);
};

export default Card;
