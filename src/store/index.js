/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import * as models from '../models'
import { init } from "@rematch/core";
import createPersistPlugin, { getPersistor } from "@rematch/persist";
import createLoadingPlugin from "@rematch/loading";

// Create plugins
const persistPlugin = createPersistPlugin({
  version: 2
});
const loadingPlugin = createLoadingPlugin({});

const configureStore = () => {

  const store = init({
    models,
    redux: {
      reducers,
      middlewares: [thunk]
    },
    plugins: [persistPlugin, loadingPlugin]
  });

  const persistor = getPersistor();

  return { persistor, store };
};

export default configureStore;
