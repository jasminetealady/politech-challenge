export default function userDataReducer(
	state = {
		loading: false,
		likedGifs: [],
		currentGif: {},
		gifsLeft: 5
	},
	action
) {
	switch (action.type) {
		case 'LOADING_GIF':
			return { ...state, loading: true };

		case 'FETCH_GIF':
			return {
				...state,
				loading: false,
				currentGif: {
					name: action.data.title,
					url: action.data.images.original.url,
					weirdness: action.weirdness,
					query: action.query
				}
			};

		case 'ADD_GIF':
			let gifs = state.likedGifs;
			gifs.push(action.gif);
			let remaining = 5 - gifs.length;
			return {
				...state,
				likedGifs: gifs,
				gifsLeft: remaining
			};

		default:
			return state;
	}
}
