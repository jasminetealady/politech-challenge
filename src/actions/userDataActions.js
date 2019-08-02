export function fetchGif(query, weirdness) {
	let api = process.env.REACT_APP_API_URL;
	let key = process.env.REACT_APP_API_KEY;
	let url = `${api}?s=${query}&api_key=${key}&limit=5&weirdness=${weirdness}`;

	return dispatch => {
		dispatch({ type: 'LOADING_GIF' });
		return fetch(url)
			.then(response => response.json())
			.then(function(data) {
				if (data) {
					data = data.data;
					dispatch({ type: 'FETCH_GIF', data, query, weirdness });
				}
			});
	};
}

export function addLikedGif(gif) {
	return dispatch => {
		dispatch({ type: 'ADD_GIF', gif });
	};
}

export function deleteGif(gif) {
	return dispatch => {
		dispatch({ type: 'DELETE_GIF', gif });
	};
}
