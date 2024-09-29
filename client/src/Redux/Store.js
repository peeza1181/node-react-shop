import { combineReducers, createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { productListReducer, productReducer } from "./Reducers/Product.js";

import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  productListReducer,
  productReducer,
});

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk)); //Apply thunk middleware

export let persistor = persistStore(store);
