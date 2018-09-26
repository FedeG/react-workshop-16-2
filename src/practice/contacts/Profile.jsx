import React from 'react';
import PropTypes from 'prop-types';
import { Image, Panel, Well } from 'react-bootstrap';

import withLoading from './loading.hoc';

const Profile = ({
  name, avatarUrl,
  username, date,
}) => (
  <Well>
    <Image src={avatarUrl} responsive rounded />
    <br />
    <Panel>
      <Panel.Heading>
        {name}
      </Panel.Heading>
      <Panel.Body>
        <p>
          {`Username: ${username}`}
        </p>
        <p>
          {`Fecha de nacimiento: ${date.toLocaleTimeString()}`}
        </p>
      </Panel.Body>
    </Panel>
  </Well>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default withLoading(Profile, 'name');
