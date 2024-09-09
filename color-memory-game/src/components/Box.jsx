// import React from 'react';

const Box = ({ clickHandler, box }) => {
	const { val, color, isShowColor } = box;
	return (
		<div
			className='box'
			onClick={() => clickHandler(box)}
			style={{ backgroundColor: isShowColor ? color : 'white' }}
		/>
	);
};

export default Box;
