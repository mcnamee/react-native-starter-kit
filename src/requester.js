import request from 'superagent';
const baseURL = 'http://localhost:3000';

/**
 * Hit the companylookup endpoint with the proper query.
 * Return a promise that resolves with the response.
 */
export function exampleRequest() {
  return new Promise((resolve, reject) => {
    request.get(baseURL + '/example')
      .query({})
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body);
        }
      }
    );
  });
}
