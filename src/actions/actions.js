import {
  exampleRequest,
} from '../requester';

/** Toggle the hello world color */
export function toggleColor() {
  return { type: 'TOGGLE_COLOR' };
}

/** An example async action using the request module */
export function exampleAsync() {
  return dispatch => {
    dispatch({ type: 'EXAMPLE_REQUEST_START' });
    exampleRequest().then(data => {
      dispatch({ type: 'EXAMPLE_REQUEST_DATA', data: data });
    });
  };
}
