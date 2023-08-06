import { createStore } from 'redux'
import { combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productData from "../reducer/data.reducer";
// import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage,
}

//comine all subreducers 
const rootReducer = combineReducers({
productData
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)