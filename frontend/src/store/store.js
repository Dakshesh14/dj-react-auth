import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// importing reducer
import reducer from './user/reducer';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const middleware = [
    thunk,
]

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
)
let persistor = persistStore(store)
export { store, persistor }