import React from 'react';
import renderer from 'react-test-renderer';

import Comment from './Comment';

describe('Comment', () => {
  test('initial state', () => {
    const author = {
      name: 'Test',
      avatarUrl: 'avatarTestUrl',
    };

    const component = renderer.create(
      <Comment
        author={author}
        date={new Date()}
        comments={['buenos dias', 'buenas tarde', 'buenas noches']}
      />,
    );

    const instance = component.getInstance();
    expect(instance.state.date).toEqual(new Date());
    expect(instance.state.showDate).toBeFalsy();

    /*
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    */
  });
});
