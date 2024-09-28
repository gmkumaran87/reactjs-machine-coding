// import React from 'react';
import Cell from './Cell';

const Row = ({ items }) => {
	return (
		<>
			{items.map((item, index) => (
				<Cell item={item} key={index} />
			))}
		</>
	);
};

export default Row;
