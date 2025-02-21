import { ChangeEvent, useCallback, useRef, useState, KeyboardEvent } from 'react';
import type { MakeRequestAPIType } from '../App';
import { debounce } from '../utils/debounce';

type Props = {
	promise(value: string): Promise<MakeRequestAPIType>;
};

const AutoComplete = ({ promise }: Props) => {
	const [text, setText] = useState('');
	const [suggestion, setSuggestion] = useState<{ id: number; title: string; images: string[] }[]>([]);
	const [isShow, setIsShow] = useState<boolean>(false);
	const [suggestionFocus, setSuggestionFocus] = useState(null);
	const suggestionRefs = useRef<(HTMLLIElement | null)[]>([]); // ✅ Holds refs for list items

	const debouncedFunc = useCallback(debounce(fetchData, 500), []);
	// const debouncedFunc = debounce(fetchData, 500);

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const textVal = e.target.value;

		setText(textVal);

		if (textVal) {
			debouncedFunc(textVal);
		}
	};

	const handleSelectSuggestion = (item) => {
		console.log('select', item);
		setSuggestion([]);
		setText(item.title);
	};

	async function fetchData(text: string) {
		try {
			const result = await promise(text);
			console.log('Result', result);
			setSuggestion(result?.items?.map((el) => ({ id: el.id, title: el.title, images: el.images })));
			setIsShow(true);
		} catch (error) {
			console.log(error);
		}
	}

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		const key = event.key;

		if (key === 'ArrowDown') {
			setSuggestionFocus((prev) => {
				let newIndex;
				if (prev === null || suggestion?.length - 1 === prev) {
					newIndex = 0;
				} else {
					newIndex = prev + 1;
				}
				scrollToActive(newIndex);
				return newIndex;
			});
		}

		if (key === 'ArrowUp') {
			setSuggestionFocus((prev) => {
				let newIndex;

				if (prev === null || prev === 0) {
					newIndex = suggestion?.length - 1;
				} else {
					newIndex = prev - 1;
				}
				scrollToActive(newIndex);
				return newIndex;
			});
		}
	};

	const scrollToActive = (index: number) => {
		if (suggestionRefs.current[index]) {
			suggestionRefs.current[index]?.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
			});
		}
	};
	return (
		<div className='search-wrapper'>
			<input
				className='input-box'
				type='search'
				value={text}
				placeholder='search product'
				autoComplete='off'
				spellCheck='false'
				aria-label='Search'
				aria-autocomplete='list'
				onFocus={() => setIsShow(true)}
				onBlur={() => setTimeout(() => setIsShow(false), 200)} // ✅ Delay hiding
				onChange={handleOnChange}
				onKeyDown={handleKeyDown}
			/>
			{isShow && suggestion?.length > 0 ? (
				<ul className='list-wrapper'>
					{suggestion?.map((el, ind) => (
						<li
							key={ind}
							ref={(el) => (suggestionRefs.current[ind] = el)}
							className={`${suggestionFocus === ind ? 'active-list' : ''}  list-item`}
							onClick={() => handleSelectSuggestion(el)}
							onMouseDown={(e) => e.preventDefault()} //  Prevent onBlur before onClick
							onMouseOver={() => setSuggestionFocus(ind)}
							onMouseLeave={() => setSuggestionFocus(null)}
						>
							<img src={el.images[0]} alt='images' width={40} height={40} />
							<span>{el.title}</span>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default AutoComplete;
