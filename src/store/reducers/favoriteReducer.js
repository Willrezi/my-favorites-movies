const initialState = { favoritesMovies: [] };

export default function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE":

    default:
      return state;
  }
}
