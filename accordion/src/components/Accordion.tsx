import { useState } from 'react';

type Props = {
	isMultiple: boolean;
	title: string;
	id: number;
	info: string;
	handleSelectId: (id: number) => void;
	selectedAccord: number | null;
};

const Accordion = ({ isMultiple, title, id, info, handleSelectId, selectedAccord }: Props) => {
	const [isShow, setIsShow] = useState(false);
	const toggleAccordion = () => {
		setIsShow((prev) => !prev);
	};

	const handleSelectAccordion = () => {
		if (!isMultiple) {
			handleSelectId(id);
		} else {
			toggleAccordion();
		}
	};
	return (
		<div className='accord-wrap'>
			<div className='row' style={{ width: '100%' }}>
				<h2>{title}</h2>
				<button className='' onClick={handleSelectAccordion}>
					{'+'}
				</button>
			</div>
			{isMultiple ? isShow && <p>{info}</p> : selectedAccord === id ? <p>{info}</p> : <></>}
		</div>
	);
};

export default Accordion;
