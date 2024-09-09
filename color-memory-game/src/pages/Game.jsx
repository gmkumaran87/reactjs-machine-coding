// import React from 'react';

import { useEffect, useState } from 'react';
import Box from '../components/Box';
import { assignColorsToBox } from '../utils/helper';
// import { getRandomColor } from '../utils/helper';

const getBoxes = (total, colors) => {
	const boxes = Array.from({ length: total }, (_, index) => ({ val: index + 1, color: '', isShowColor: false }));
	const updatedBoxes = assignColorsToBox(colors, boxes);
	return updatedBoxes;
};

const Game = ({ total, colors }) => {
	const [boxes, setBoxes] = useState(getBoxes(total, colors));
	if (total % 4 !== 0) {
		return <div className=''>Please enter multiples of 4 to start the game</div>;
	}

	const handleClick = (box) => {
		const remainingBoxes = boxes.filter((el) => el.val !== box.val);
		const clickedBox = boxes[box.val - 1];
		clickedBox.isShowColor = !clickedBox.isShowColor;
		setBoxes([...remainingBoxes, clickedBox].sort((a, b) => a.val - b.val));
	};

	console.log('boxes: ', boxes);

	return (
		<div className='grid-container'>
			{boxes?.map((el) => (
				<Box key={el.val} box={el} clickHandler={handleClick} />
			))}
		</div>
	);
};
export default Game;
