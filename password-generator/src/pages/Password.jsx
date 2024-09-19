import React, { useState } from 'react';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';

const data = [
	{ title: 'Include Uppercase letters', checked: false, name: 'uppercase', id: 1 },
	{ title: 'Include Lowercase letters', checked: false, name: 'lowercase', id: 2 },
	{ title: 'Include Numbers', checked: false, name: 'numbers', id: 3 },
	{ title: 'Include Special Characters', checked: false, name: 'symbols', id: 4 },
];
const Password = () => {
	const [password, setPassword] = useState('adfsd@sd22');
	const [passwordLength, setPasswordLength] = useState(0);
	const [passwordStrength, setPasswordStrength] = useState('Low');
	const [checkboxData, setCheckboxData] = useState(data);

	const handlePasswordLength = (e) => {
		setPasswordLength(e.target.value);
	};
	const generatePassword = () => {
		// logic to generate password
		console.log('generating password', passwordLength, checkboxData);
	};
	const copyPassword = () => {
		// logic to copy password to clipboard
	};

	const checkBoxHandler = (id) => {
		const updatedCheckboxData = [...checkboxData];
		updatedCheckboxData[id - 1].checked = !updatedCheckboxData[id - 1].checked;

		setCheckboxData(updatedCheckboxData);
	};

	return (
		<div className='password-container'>
			{/* Created password & copy btn */}
			<div className='x-flex'>
				<h2 style={{ color: 'white', margin: 0 }}>{password}</h2>
				<Button label='Copy' type='button' clickHandler={copyPassword} classNm={'copy-btn'} />
			</div>
			{/* Password length */}
			<div className='x-flex'>
				<h4 style={{ color: 'white', margin: 0 }}>Character Length</h4>
				<span style={{ color: 'white', lineHeight: '20px' }}>{passwordLength}</span>
			</div>
			{/** Slider */}
			<input
				type='range'
				min='0'
				max='20'
				value={passwordLength}
				step={1}
				className='input-slider'
				onChange={handlePasswordLength}
			/>
			{/** Number of uppercase letters */}
			{/** Checkboxes for getting input */}
			<div className='checkbox-container'>
				{checkboxData?.map((el) => (
					<CheckBox
						key={el.id}
						label={el.title}
						id={el.id}
						name={el.name}
						value={el.checked}
						checkBoxHandler={checkBoxHandler}
					/>
				))}
			</div>

			<div className='x-flex'>
				<h4 style={{ color: 'white', margin: 0 }}>Stength of the Password</h4>
				<span style={{ color: 'white', lineHeight: '20px' }}>{passwordStrength}</span>
			</div>
			{/** Generate button */}
			<Button label='Generate' type='button' classNm={'generate-btn'} clickHandler={generatePassword} />
		</div>
	);
};

export default Password;
