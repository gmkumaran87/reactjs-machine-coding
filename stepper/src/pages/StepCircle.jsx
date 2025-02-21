// import React from 'react';

const StepCircle = ({ status, id }) => {
	return (
		<div className={`circle ${status}`}>
			{status === 'completed' ? <span>&#10004;</span> : id}
			<p className='progress-label'>My Experience </p>
		</div>
	);
};

export default StepCircle;
