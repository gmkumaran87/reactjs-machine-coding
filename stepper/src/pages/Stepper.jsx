// import React from 'react';
import ProgressBar from './ProgressBar';
import StepCircle from './StepCircle';

const Stepper = ({ configSteps }) => {
	// console.log('Stepper config', configSteps);
	return (
		<div className='flex  col'>
			<h1>Checkout</h1>
			<ol className='flex row container'>
				{configSteps?.map((step, index) => (
					<li key={step.id} className='flex row list'>
						{index + 1 === configSteps?.length ? <></> : <ProgressBar status={step?.status} />}
						<StepCircle status={step?.status} id={step?.id} />
					</li>
				))}
			</ol>
		</div>
	);
};

export default Stepper;
