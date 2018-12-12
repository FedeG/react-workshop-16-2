import React from 'react';
import renderer from 'react-test-renderer';

import Comment from './index';
import Avatar from './Avatar';

jest.mock('../clock', () => () => 'Clock');

test('Comment change time when click', () => {
  const author = {
    name: 'Fede',
    avatarUrl: 'https://imagekit.androidphoria.com/wp-content/uploads/clash-royale-pajaro-simpsons.jpg',
  };
  const component = renderer.create(
    <Comment author={author} date={new Date()} />,
  );

  const instance = component.root;
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  const event = {
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
  };
  instance.findAllByType(Avatar)[0].findByType('div').props.onClick(event);

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  instance.findAllByType(Avatar)[0].findByType('div').props.onClick(event);

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
