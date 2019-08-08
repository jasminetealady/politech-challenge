export default function userDataReducer(
  state = {
    loading: false,
    likedGifs: [],
    currentGif: {},
    gifsLeft: 5,
    message: ''
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
      let likedGifs = state.likedGifs;
      likedGifs.push(action.gif);
      let remaining = 5 - likedGifs.length;
      return {
        ...state,
        likedGifs: likedGifs,
        gifsLeft: remaining
      };

    case 'DELETE_GIF':
      let gifsAfterDelete = state.likedGifs.filter(
        gif => gif.url !== action.gif.url
      );
      let remainingAfterDelete = 5 - gifsAfterDelete.length;
      return {
        ...state,
        likedGifs: gifsAfterDelete,
        gifsLeft: remainingAfterDelete
      };

    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message
      };

    case 'START_OVER':
      return {
        ...state,
        likedGifs: [],
        currentGif: {},
        gifsLeft: 5,
        message: ''
      };

    default:
      return state;
  }
}
