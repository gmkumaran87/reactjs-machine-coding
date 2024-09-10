// import React from 'react';

import { useEffect, useState } from 'react';
import Box from '../components/Box';
import { assignColorsToBox, isEmptyObject } from '../utils/helper';
// import { getRandomColor } from '../utils/helper';

const getBoxes = (total, colors) => {
	const boxes = Array.from({ length: total }, (_, index) => ({ val: index + 1, color: '', isShowColor: false }));
	const updatedBoxes = assignColorsToBox(colors, boxes);
	return updatedBoxes;
};

const Game = ({ total, colors }) => {
	const [boxes, setBoxes] = useState(getBoxes(total, colors));
	const [boxClicked, setBoxClicked] = useState({});
	const [count, setCount] = useState(0);
	const [isGameOver, setIsGameOver] = useState(false);
	const [pairCount, setPairCount] = useState(0);

	if (total % 4 !== 0) {
		return <div className=''>Please enter multiples of 4 to start the game</div>;
	}

	const handleClick = (box) => {
		setCount((prev) => prev + 1);
		// if the user clicks on the same box twice, return immediately
		if (boxClicked?.val === box.val) return;

		// const clickedBox = boxes[box.val - 1];
		// clickedBox.isShowColor = !clickedBox.isShowColor;
		console.log('Box clicking', box);
		setBoxes((prev) => {
			return [...prev].map((el) => (el.val === box.val ? { ...el, isShowColor: !el.isShowColor } : el));
		});

		if (isEmptyObject(boxClicked)) {
			setBoxClicked({ ...box });
			return;
		}

		// Check if the box is clicked already, if so then compare the colors with current box
		if (boxClicked.color === box.color) {
			// alert('Congratulations! You found a matching color!');
			setBoxes((prev) => [...prev].map((el) => (el.val === box.val ? { ...el, isShowColor: true } : el)));
			setBoxClicked({});
			setPairCount((prev) => prev + 1);
			if (pairCount === total / 2 - 1) {
				setIsGameOver(true);
			}
			return;
		} else {
			setTimeout(() => {
				// setBoxClicked({});

				setBoxes((prev) => {
					return [...prev].map((el) => (el.val === box.val ? { ...el, isShowColor: !el.isShowColor } : el));
				});
			}, 400);
		}
	};

	const resetGame = () => {
		setBoxClicked({});
		setBoxes((prev) => [...prev].map((el) => ({ ...el, isShowColor: false })));
		setIsGameOver(false);
	};

	return (
		<>
			{isGameOver ? (
				<div className='game-over'>
					<p>Game over in {count} rounds</p>
					<button className='btn' onClick={resetGame}>
						Reset Game
					</button>
				</div>
			) : (
				<div className='grid-container'>
					{boxes?.map((el) => (
						<Box key={el.val} box={el} clickHandler={handleClick} />
					))}
				</div>
			)}
		</>
	);
};
export default Game;
