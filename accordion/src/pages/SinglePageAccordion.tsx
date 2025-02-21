import { useState } from 'react';
import Accordion from '../components/Accordion';

type QuestionObj = {
	id: number;
	title: string;
	info: string;
};
type Props = {
	data: QuestionObj[];
};

const SinglePageAccordion = ({ data }: Props) => {
	const [isMultiple, setIsMultiple] = useState(true);
	const [selectedAccord, setSelectedAccord] = useState<number | null>(null);

	function handleSelectId(id: number) {
		setSelectedAccord(id);
	}
	return (
		<div className='accordion-wrapper'>
			<div className='row' style={{ marginBottom: '2rem' }}>
				<h4>Allow multiple accordion to open</h4>
				<input
					type='checkbox'
					checked={isMultiple}
					className='checkbox'
					onChange={() => setIsMultiple((prev) => !prev)}
				/>
			</div>
			{data?.map((el) => (
				<Accordion
					isMultiple={isMultiple}
					key={el.id}
					title={el.title}
					id={el.id}
					info={el.info}
					handleSelectId={handleSelectId}
					selectedAccord={selectedAccord}
				/>
			))}
		</div>
	);
};

export default SinglePageAccordion;
