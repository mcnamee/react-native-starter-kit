// This is an example model

export default {
  namespace: 'example',
  state: {
    count: 0,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return state.count + payload;
    },
  },
  effects: dispatch => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.example.increment(payload);
    },
  }),
};
