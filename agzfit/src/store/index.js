import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
// import AsyncStorage from '@react-native-community/async-storage';
import storage from 'redux-persist/lib/storage';

import thunk from "redux-thunk";
import { rootReducer } from "./ducks";
const persistConfig = {
    key: "agzfit",
    storage: storage,
    whitelist: ["auth"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor };