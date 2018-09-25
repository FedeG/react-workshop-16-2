import React from 'react';
import renderer from 'react-test-renderer';

import App from './index';

describe('App', () => {
  beforeEach(() => {
    fetch.resetMocks();
    /* eslint-disable-next-line */
    fetch.mockResponse(JSON.stringify({ "results": [{ "gender": "male", "name": { "title": "mr", "first": "julio", "last": "taylor" }, "location": { "street": "5472 hamilton ave", "city": "madison", "state": "ohio", "postcode": 90480, "coordinates": { "latitude": "83.2831", "longitude": "-110.8280" }, "timezone": { "offset": "-11:00", "description": "Midway Island, Samoa" } }, "email": "julio.taylor@example.com", "login": { "uuid": "8e1858be-010c-4fae-957f-e744fbb28095", "username": "lazyzebra917", "password": "fidelio", "salt": "ceaX0P4Y", "md5": "9e7c12fbe3c29cca8600fd54efc78328", "sha1": "eca7151c8cd498535a48fab26c55bb3aa385e4f7", "sha256": "b53a0083c05eea5f64f0c16159dab0d00ef2ea633f7f7f10b639e1bd10e8395a" }, "dob": { "date": "1967-12-01T17:01:05Z", "age": 50 }, "registered": { "date": "2006-04-18T03:40:50Z", "age": 12 }, "phone": "(967)-150-6372", "cell": "(711)-439-2182", "id": { "name": "SSN", "value": "341-20-1824" }, "picture": { "large": "https://randomuser.me/api/portraits/men/27.jpg", "medium": "https://randomuser.me/api/portraits/med/men/27.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg" }, "nat": "US" }], "info": { "seed": "2d98f18f5820dbfc", "results": 1, "page": 1, "version": "1.2" } }));
  });

  test('Should call fetch', () => {
    const component = renderer.create(
      <App />,
    );
    // const instance = component.getInstance();
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
