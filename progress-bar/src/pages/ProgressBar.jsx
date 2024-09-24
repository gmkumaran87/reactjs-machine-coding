import React from 'react';

const ProgressBar = ({ value = 0 }) => {
	return (
		<div className='progress'>
			<div style={{ width: '100%', display: 'flex', justifyContent: 'center', zIndex: 999 }}>
				<span style={{ color: value > 49 ? 'white' : '' }}>{value}%</span>
			</div>
			<div className='progress-bar' style={{ width: `${value}%` }} />
		</div>
	);
};

export default ProgressBar;
