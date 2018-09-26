import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Avatar({ author: { avatarUrl, name } }) {
  return (
    <img
      className="Avatar"
      src={avatarUrl}
      alt={name}
    />
  );
}

Avatar.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
};

function UserInfo({ author }) {
  return (
    <div className="UserInfo">
      <Avatar author={author} />
      <div className="UserInfo-name">
        {author.name}
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
};

class CommentDate extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
  }

  formatDate = () => {
    const { date } = this.props;
    return date.toDateString();
  }

  render() {
    return (
      <div className="Comment-date">
        {this.formatDate()}
      </div>
    );
  }
}

function Comment({ author, text, date }) {
  return (
    <div className="Comment">
      <UserInfo author={author} />
      <div className="Comment-text">
        {text}
      </div>
      <CommentDate date={date} />
    </div>
  );
}

Comment.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  text: PropTypes.string,
};

Comment.defaultProps = {
  text: '',
};

const author = {
  name: 'Fede',
  avatarUrl: 'https://imagekit.androidphoria.com/wp-content/uploads/clash-royale-pajaro-simpsons.jpg',
};
ReactDOM.render(<Comment
  author={author}
  date={new Date()}
  text="Esta componente hay que mejorarla"
/>, document.getElementById('root'));
