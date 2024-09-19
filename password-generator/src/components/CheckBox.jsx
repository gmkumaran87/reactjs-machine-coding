import React from 'react';

const CheckBox = ({ id, name, label, value, checkBoxHandler }) => {
	return (
		<div className='checkbox'>
			<input type='checkbox' id={id} name={name} checked={value} onChange={() => checkBoxHandler(id)} />
			<label htmlFor='uppercase'>{label}</label>
		</div>
	);
};

export default CheckBox;
