/* global */
import { init } from '@rematch/core';
import createPersistPlugin, { getPersistor } from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import AsyncStorage from '@react-native-community/async-storage';
import * as models from '../models';

// Create plugins
const persistPlugin = createPersistPlugin({
  version: 2,
  storage: AsyncStorage,
  blacklist: [],
});
const loadingPlugin = createLoadingPlugin({});

const configureStore = () => {
  const store = init({
    models,
    redux: {
      middlewares: [],
    },
    plugins: [persistPlugin, loadingPlugin],
  });

  const persistor = getPersistor();
  const { dispatch } = store;

  return { persistor, store, dispatch };
};

export default configureStore;
