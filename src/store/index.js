/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const reduxPersistConfig = { key: 'root', storage, blacklist: [] };

const reducer = persistCombineReducers(reduxPersistConfig, reducers);

const middleware = [thunk];

const configureStore = () => {
  // Allows us to use redux devtools when it exists
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancer(applyMiddleware(...middleware)));
  const persistor = persistStore(store, null, () => { store.getState(); });

  return { persistor, store };
};

export default configureStore;
