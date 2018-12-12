import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Clock from '../clock';
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import CommentText from './CommentText';
import CommentDate from './CommentDate';

export default class Comment extends React.PureComponent {
  static propTypes = {
    author: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'agrega el primer comentario',
  };

  state = {
    date: new Date(),
  }

  onClickHandler = () => {
    this.setState({ date: new Date() });
  }

  render() {
    const { date: clockDate } = this.state;
    const { author, date, text } = this.props;
    return (
      <div className="Comment">
        <UserInfo author={author} onClickHandler={this.onClickHandler} />
        <CommentText>
          <div>
            <h1>Comentario:</h1>
            <Avatar author={author} onClickHandler={this.onClickHandler} />
            <h4>{text}</h4>
          </div>
        </CommentText>
        <CommentDate date={date} />
        <Clock date={clockDate} />
      </div>
    );
  }
}

const author = {
  name: 'Fede',
  avatarUrl: 'https://imagekit.androidphoria.com/wp-content/uploads/clash-royale-pajaro-simpsons.jpg',
};

ReactDOM.render(<Comment
  author={author}
  date={new Date()}
/>, document.getElementById('root'));
