import clone from 'clone';
import assign from 'object-assign';
import {
  TOGGLE_COLOR,
  EXAMPLE_REQUEST_START,
  EXAMPLE_REQUEST_DATA,
} from '../constants/Constants';

const initialState = {
  color: 'red',
  data: {
    loading: false,
    objects: [],
  },
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_COLOR:
    return assign({}, state, {
      color: state.color === 'red' ? 'blue' : 'red'
    });

  case EXAMPLE_REQUEST_START:
    return assign({}, state, {
      data: assign({}, state.data, {
        loading: true,
      }),
    });

  case EXAMPLE_REQUEST_DATA:
    return assign({}, state, {
      data: assign({}, state.data, {
        loading: false,
        objects: action.data,
      }),
    });

  default:
    return state;
  }
}
