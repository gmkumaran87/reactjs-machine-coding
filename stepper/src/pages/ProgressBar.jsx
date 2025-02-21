// import React from 'react';

const ProgressBar = ({ status }) => {
	return (
		<div className='bar'>
			<div className={`progress`}>
				<div className='progress-active' style={{ width: status === 'completed' ? '100%' : '0px' }} />
			</div>
		</div>
	);
};

export default ProgressBar;
