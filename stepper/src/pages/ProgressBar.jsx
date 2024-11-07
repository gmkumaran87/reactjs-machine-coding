// import React from 'react';

const ProgressBar = ({ status }) => {
	return (
		<div className='bar'>
			<div className={`progress`} style={{ width: status === 'completed' ? '100%' : '0px' }} />
		</div>
	);
};

export default ProgressBar;
