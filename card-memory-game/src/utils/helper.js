export const TOTAL_CARDS = 6;
const CARD_NAME = ['A', 'B', 'C'];

export function generateCards(total) {
	const arr = Array.from({ length: total }, (_, index) => ({ id: index, front: '?', back: '', isFlipped: false }));
	return arr;
}

export function shuffleCards(cards) {
	const newCards = [...cards];
	let assignedIndex = [];

	CARD_NAME.forEach((name) => {
		console.log('Card name', name);
		let i = 0;

		while (i < 2) {
			let randomIndx = Math.floor(Math.random() * TOTAL_CARDS);

			if (!assignedIndex.includes(randomIndx)) {
				assignedIndex.push(randomIndx);
				newCards[randomIndx].back = name;
				i++;
			} /*else {
				randomIndx = Math.floor(Math.random() * TOTAL_CARDS);
			}*/
		}
		console.log('Random index', name, assignedIndex, i);
	});
	return newCards;
}
