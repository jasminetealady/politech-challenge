export default function userDataReducer(
	state = {
		loading: false,
		likedGifs: [],
		currentGif: {}
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

		default:
			return state;
	}
}
