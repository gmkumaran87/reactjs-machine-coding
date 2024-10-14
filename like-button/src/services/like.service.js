export async function getApiData(isLiked) {
	// try {
	const response = await fetch('https://www.greatfrontend.com/api/questions/like-button', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ action: isLiked ? 'unlike' : 'like' }),
	});
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	console.log('Response', response);
	return await response.json();
	// } catch (error) {
	// console.log('Error:', error);
	// throw error;
	// }
}
