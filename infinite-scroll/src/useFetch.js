import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(pageNo) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [hasMore, setHasMore] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		let cancel;
		const fetchData = async () => {
			try {
				const res = await axios({
					method: 'GET',
					url: 'https://jsonplaceholder.typicode.com/photos',
					params: { _page: pageNo, _limit: 10 },
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				});

				setItems((prev) => [...new Set([...prev, ...res.data.map((el) => el.title)])]);
				setHasMore(res.data.at(-1) !== 5000 || res.data.length === 0);
				setIsLoading(false);
			} catch (error) {
				if (axios.isCancel(error)) return;
				setError(error);
			}
		};

		fetchData();

		// return () => cancel(error);
	}, [pageNo]);
	return [isLoading, error, items, hasMore];
}

export default useFetch;
