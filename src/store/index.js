/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import logger from "redux-logger";
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
      middlewares: [thunk, logger]
    },
    plugins: [persistPlugin, loadingPlugin]
  });

  const persistor = getPersistor();
  const { dispatch } = store;

  return { persistor, store, dispatch };
};


export default configureStore;
