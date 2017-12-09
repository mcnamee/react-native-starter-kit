import assign from 'object-assign';

const initialState = {
  color: 'red',
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
  case 'TOGGLE_COLOR':
    return assign({}, state, {
      color: state.color === 'red' ? 'blue' : 'red'
    });

  default:
    return state;
  }
}
