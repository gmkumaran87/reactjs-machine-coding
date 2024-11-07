import { useState } from 'react';

import './App.css';
import Stepper from './pages/Stepper';

const config = [
	{ id: 1, name: 'Customer Info', status: 'active' },
	{ id: 2, name: 'Shippin Info', status: 'inactive' },
	{ id: 3, name: 'Payment Info', status: 'inactive' },
	{ id: 4, name: 'Delivered', status: 'inactive' },
];
function App() {
	const [stepper, setStepper] = useState(config);
	const [currentStep, setCurrentStep] = useState(1);

	const gotToNextStep = () => {
		const newStepper = [...stepper];
		const currentActiveStep = newStepper.find((step) => step.status === 'active');

		if (!currentActiveStep) return;
		if (currentActiveStep?.id === stepper?.length) {
			currentActiveStep.status = 'completed';
			setStepper(newStepper);
			return;
		}
		const nextStep = newStepper.find((step) => step.id === currentActiveStep.id + 1);

		if (nextStep) {
			nextStep.status = 'active';
			currentActiveStep.status = 'completed';
			setStepper(newStepper);
			setCurrentStep(nextStep.id);
		}
	};

	return (
		<div className='container flex col' style={{ gap: '2rem' }}>
			<Stepper configSteps={stepper} />
			<button onClick={gotToNextStep}>{currentStep === stepper?.length ? 'Finish' : 'Next'}</button>
		</div>
	);
}

export default App;
