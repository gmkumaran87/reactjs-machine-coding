import React from 'react';

const Cell = ({ item, order }) => {
	const classes = `box ${order.includes(item.index) ? 'active' : ''}`;
	return <>{item?.value ? <div className={classes} data-id={item?.index} /> : <span></span>}</>;
};

export default Cell;
