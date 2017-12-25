/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import thunk from 'redux-thunk';
import reducers from '../reducers';

// Redux Persist config
const config = {
  key: 'root',
  storage,
  blacklist: ['status'],
};

const reducer = persistCombineReducers(config, reducers);

const middleware = [thunk];

const configureStore = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(...middleware)),
  );

  const persistor = persistStore(
    store,
    null,
    () => { store.getState(); },
  );

  return { persistor, store };
};

export default configureStore;
