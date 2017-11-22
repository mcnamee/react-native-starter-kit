if (process.env.NODE_ENV !== 'development' || process.env.PLATFORM_ENV !== 'web') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
