import React from 'react';

const Button = ({ type, label, clickHandler, classNm }) => {
	return (
		<button type={type} onClick={clickHandler} className={`btn ${classNm}`}>
			{label}
		</button>
	);
};

export default Button;
