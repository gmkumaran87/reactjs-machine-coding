import { useState } from 'react';
import './App.css';
import { FaHeart } from 'react-icons/fa';
import { getApiData } from './services/like.service';

function App() {
	const [isLiked, setIsLiked] = useState(false);
	const [btnText, setBtnText] = useState('Like');
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState(null);

	const handleClick = async () => {
		try {
			setIsFetching(true);
			const res = await getApiData(isLiked);

			if (res?.message !== 'Success!') {
				setError(res.message);
			} else {
				setError(null);
				setIsLiked(!isLiked);
				setBtnText(isLiked ? 'Unlike' : 'Like');
			}
		} catch (error) {
			setError('Something went wrong...');

			console.log('Error:', error);
		} finally {
			setIsFetching(false);
		}
	};
	console.log('Like', { isLiked, error, isFetching });
	return (
		<div
			style={{ display: 'flex', flexFlow: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}
		>
			<button
				className={`btn ${isLiked ? 'unlike-btn' : 'like-button'}`}
				type='button'
				onClick={handleClick}
				disabled={isFetching ? true : false}
			>
				{isFetching ? '...' : <FaHeart className='heart' />}
				<span className='btn-text'>{btnText}</span>
			</button>
			{error ? <span className='error'>{error}</span> : null}
		</div>
	);
}

export default App;
