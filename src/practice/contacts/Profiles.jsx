import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

import Profile from './Profile';
import withLoading from './loading.hoc';

const Profiles = ({ users }) => {
  const profiles = users.map(
    user => (
      <Col key={user.login.username} sm={6} md={4} lg={3}>
        <Profile
          name={`${user.name.first} ${user.name.last}`}
          username={user.login.username}
          date={new Date(user.registered.date)}
          avatarUrl={user.picture.large}
        />
      </Col>
    ),
  );
  return (
    <Grid className="App-intro">
      <br />
      <Row>
        {profiles}
      </Row>
    </Grid>
  );
};

Profiles.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.shape({
        username: PropTypes.string,
      }),
      name: PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.string,
      }),
      picture: PropTypes.shape({
        large: PropTypes.string,
      }),
      registered: PropTypes.shape({
        date: PropTypes.string,
      }),
    }),
  ).isRequired,
};

export default withLoading(Profiles, 'users');
