/* global window */
import { init } from "@rematch/core";
import createPersistPlugin, { getPersistor } from "@rematch/persist";
import createLoadingPlugin from "@rematch/loading";
import logger from "redux-logger";
import * as models from '../models'

// Create plugins
const persistPlugin = createPersistPlugin({
  version: 2
});
const loadingPlugin = createLoadingPlugin({});

const configureStore = () => {

  const store = init({
    models,
    redux: {
      middlewares: [logger]
    },
    plugins: [persistPlugin, loadingPlugin]
  });

  const persistor = getPersistor();
  const { dispatch } = store;

  return { persistor, store, dispatch };
};


export default configureStore;
