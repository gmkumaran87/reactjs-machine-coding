import { useEffect, useState } from 'react';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import { CHECKBOX_DATA } from '../constants/constant';
import { getRandomNumber } from '../utils/helper';

const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*?/~';

const Password = () => {
	const [password, setPassword] = useState('adfsd@sd22');
	const [passwordLength, setPasswordLength] = useState(6);
	const [passwordStrength, setPasswordStrength] = useState('Low');
	const [checkboxData, setCheckboxData] = useState(CHECKBOX_DATA);
	const [error, setError] = useState('');
	const handlePasswordLength = (e) => {
		setPasswordLength(e.target.value);
	};
	const generatePassword = () => {
		// logic to generate password

		const arr = checkboxData?.filter((checkbox) => Boolean(checkbox.checked))?.map((el) => el.name);
		if (arr.length === 0) {
			setError('Please select at least one checkbox.');
			return;
		}

		let randomChar = '';

		for (let i = 0; i < passwordLength; i++) {
			let randomNum = getRandomNumber(arr.length);
			switch (arr[randomNum]) {
				case 'lowercase': {
					let getLowerChar = getRandomNumber(26);
					randomChar += LOWER_CASE[getLowerChar];

					break;
				}
				case 'symbols': {
					let getSymbol = getRandomNumber(SYMBOLS.length);
					randomChar += SYMBOLS[getSymbol];

					break;
				}
				case 'uppercase': {
					let random = getRandomNumber(26);
					randomChar += UPPER_CASE[random];

					break;
				}
				case 'numbers': {
					let randomNum = getRandomNumber(NUMBERS.length);
					randomChar += NUMBERS[randomNum];

					break;
				}
			}
		}
		let passwordType = '';
		console.log(randomChar, passwordLength);
		setPassword(randomChar);
		if (passwordLength >= 12) {
			passwordType = 'Strong';
		} else if (passwordLength < 12 && passwordLength >= 6) {
			passwordType = 'Medium';
		} else {
			passwordType = 'Weak';
		}
		setPasswordStrength(passwordType);
	};
	const copyPassword = () => {
		// logic to copy password to clipboard
		navigator.clipboard.writeText(password);
	};

	const checkBoxHandler = (id) => {
		const updatedCheckboxData = [...checkboxData];
		updatedCheckboxData[id - 1].checked = !updatedCheckboxData[id - 1].checked;

		setCheckboxData(updatedCheckboxData);
	};

	useEffect(() => {
		if (!error) return;

		setTimeout(() => {
			setError('');
		}, 2000);
	}, [error]);
	return (
		<>
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
			{error && <div className='error-message'>{error}</div>}
		</>
	);
};

export default Password;
