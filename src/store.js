import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/reducers";
// import persistStore from "redux-persist/es/persistStore";

const middleware = [thunk];
// const initialState = {};

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { persistor, store };
