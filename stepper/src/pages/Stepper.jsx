// import React from 'react';
import ProgressBar from './ProgressBar';
import StepCircle from './StepCircle';

const Stepper = ({ configSteps }) => {
	// console.log('Stepper config', configSteps);
	return (
		<div className='flex  col'>
			<h1>Checkout</h1>
			<div className='flex row container'>
				{configSteps?.map((step, index) => (
					<div key={step.id} className='flex row'>
						<StepCircle status={step?.status} id={step?.id} />
						{index + 1 === configSteps?.length ? <></> : <ProgressBar status={step?.status} />}
					</div>
				))}
			</div>
		</div>
	);
};

export default Stepper;
