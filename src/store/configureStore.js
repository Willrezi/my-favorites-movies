import { createStore } from "redux";

import favoriteReducer from "./reducers/favoriteReducer";

export default createStore(favoriteReducer);
