import {createStore, combineReducers} from 'redux'
import {persistReducer} from 'redux-persist';
import AppReducer from './appReducer';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['AppData'],
}

const rootReducer = combineReducers({
    AppData: AppReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export default store;