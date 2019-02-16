const initialState = { favoritesMovie: [] };

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE_MOVIE":
      const favoriteMovieIndex = state.favoritesMovie.findIndex(
        item => item.id === action.value.id
      );
      if (favoriteMovieIndex !== -1) {
        return {
          ...state,
          favoritesMovie: state.favoritesMovie.filter(
            (item, index) => index !== favoriteMovieIndex
          )
        };
      } else {
        return {
          ...state,
          favoritesMovie: [...state.favoritesMovie, action.value]
        };
      }
    default:
      return state;
  }
}
