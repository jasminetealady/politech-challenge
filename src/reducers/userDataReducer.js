export default function userDataReducer(
	state = {
		loading: false,
		likedGifs: [],
		currentlyFetchedGif: {}
	},
	action
) {
	switch (action.type) {
		case 'LOADING_GIF':
			return { ...state, loading: true };

		case 'FETCH_GIF':
			debugger;
			return {
				...state,
				loading: false,
				currentlyFetchedGif: {
					name: action.data.title,
					url: action.data.images.original.url
				}
			};

		default:
			return state;
	}
}
