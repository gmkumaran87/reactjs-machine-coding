import { useEffect, useState } from 'react';
import { flatten } from '../utils/helper';
import Cell from '../components/Cell';

const Grid = ({ config }) => {
	const [gridButtons, setGridButtons] = useState();
	const [clickedBoxes, setClickedBoxes] = useState([]);

	useEffect(() => {
		const flattenedArr = flatten(config);
		setGridButtons(() => flattenedArr.map((row, index) => ({ value: row, index, isActivated: false })));
	}, [config]);

	const activateCell = (index) => {
		const updatedGridButtons = [...gridButtons];
		if (updatedGridButtons[index].isActivated) return;

		updatedGridButtons[index].isActivated = !updatedGridButtons[index].isActivated;
		setGridButtons(updatedGridButtons);
		setClickedBoxes((prev) => [...prev, index]);
		if (clickedBoxes?.length === 7) {
			deactivateCell();
		}
	};
	const activateHandler = (e) => {
		const target = e.target.dataset.id;

		console.log('activate', target);
		if (!target) return;
		activateCell(parseInt(target));
		e.preventDefault();
	};

	// Deactivate cells after 500ms
	function deactivateCell() {
		const timer = setInterval(() => {
			setClickedBoxes((prev) => {
				const order = prev.slice();
				order.pop();

				// If all cells are deactivated, reset the array
				if (order.length === 0) {
					clearInterval(timer);
					return [];
				}
				return order;
			});
		}, 500);
	}

	// console.log('Boxes', { clickedBoxes });
	return (
		<div
			className='grid-container'
			style={{ gridTemplateColumns: `repeat(${config[0]?.length},1fr)` }}
			onClick={activateHandler}
		>
			{gridButtons?.map((el, index) => (
				<Cell key={index} item={el} order={clickedBoxes} />
			))}
		</div>
	);
};

export default Grid;
